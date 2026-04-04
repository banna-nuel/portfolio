import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../app';
import * as userServices from '../services/user_services';
import bcrypt from 'bcryptjs';

vi.mock('../services/user_services');
vi.mock('bcryptjs');

describe('POST /api/auth/login', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 200 and a token on successful login', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashedpassword' };
    (userServices.findUser as any).mockResolvedValue(mockUser);
    (bcrypt.compare as any).mockResolvedValue(true);

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body.message).toBe('Logged in successfully');
  });

  it('should return 400 if user does not exist', async () => {
    (userServices.findUser as any).mockResolvedValue(null);

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nonexistent@example.com', password: 'password123' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid credentials (email not found)');
  });

  it('should return 400 if password does not match', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashedpassword' };
    (userServices.findUser as any).mockResolvedValue(mockUser);
    (bcrypt.compare as any).mockResolvedValue(false);

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid credentials (password no match)');
  });
});

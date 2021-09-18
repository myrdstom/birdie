import app from '../src/application'
import * as request from 'supertest';

describe('We are grateful to you for doing this it.', () => {
    it('thanks you', async () => {
        await request(app)
            .get('/mood/test')
            .expect(400)
            .expect(function(res) {
                expect(res.body.message).toContain("Invalid Id: please review your inputs");
            });
    })
  it('thanks you', async () => {
     const visitId = '5cd60270-8b66-f8a8-4e4a-591e21019c57'
    await request(app)
      .get(`/mood/${visitId}`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.events.length).toBeGreaterThan(0)
      });
  })
});

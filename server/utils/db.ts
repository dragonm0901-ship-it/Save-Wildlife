import { type H3Event } from 'h3';
import { serverSupabaseClient } from '#supabase/server';

/**
 * useDb provides a consistent interface for database access.
 * Now migrated to use Supabase to resolve local MySQL connection issues.
 */
export const useDb = async (event: H3Event) => {
  try {
    const client = await serverSupabaseClient(event);
    if (!client) {
      throw new Error('Supabase client not initialized');
    }
    return client;
  } catch (error) {
    console.error('Database connection error:', error);
    throw createError({
      statusCode: 503,
      message: 'Database service unavailable'
    });
  }
};

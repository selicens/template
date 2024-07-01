// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/dashboard/analysis': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/dashboard/analysis').default>>>>
    }
    '/': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/index').default>>>>
    }
  }
}
export {}
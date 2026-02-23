
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Table_Restaurant
 * 
 */
export type Table_Restaurant = $Result.DefaultSelection<Prisma.$Table_RestaurantPayload>
/**
 * Model Employe
 * 
 */
export type Employe = $Result.DefaultSelection<Prisma.$EmployePayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Plat
 * 
 */
export type Plat = $Result.DefaultSelection<Prisma.$PlatPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>
/**
 * Model Ligne_Commande
 * 
 */
export type Ligne_Commande = $Result.DefaultSelection<Prisma.$Ligne_CommandePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table_Restaurant`: Exposes CRUD operations for the **Table_Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Table_Restaurants
    * const table_Restaurants = await prisma.table_Restaurant.findMany()
    * ```
    */
  get table_Restaurant(): Prisma.Table_RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employe`: Exposes CRUD operations for the **Employe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employes
    * const employes = await prisma.employe.findMany()
    * ```
    */
  get employe(): Prisma.EmployeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plat`: Exposes CRUD operations for the **Plat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plats
    * const plats = await prisma.plat.findMany()
    * ```
    */
  get plat(): Prisma.PlatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ligne_Commande`: Exposes CRUD operations for the **Ligne_Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ligne_Commandes
    * const ligne_Commandes = await prisma.ligne_Commande.findMany()
    * ```
    */
  get ligne_Commande(): Prisma.Ligne_CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    Table_Restaurant: 'Table_Restaurant',
    Employe: 'Employe',
    Categorie: 'Categorie',
    Plat: 'Plat',
    Reservation: 'Reservation',
    Commande: 'Commande',
    Ligne_Commande: 'Ligne_Commande',
    Paiement: 'Paiement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "table_Restaurant" | "employe" | "categorie" | "plat" | "reservation" | "commande" | "ligne_Commande" | "paiement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Table_Restaurant: {
        payload: Prisma.$Table_RestaurantPayload<ExtArgs>
        fields: Prisma.Table_RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Table_RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Table_RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          findFirst: {
            args: Prisma.Table_RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Table_RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          findMany: {
            args: Prisma.Table_RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>[]
          }
          create: {
            args: Prisma.Table_RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          createMany: {
            args: Prisma.Table_RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Table_RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>[]
          }
          delete: {
            args: Prisma.Table_RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          update: {
            args: Prisma.Table_RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.Table_RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Table_RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Table_RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.Table_RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_RestaurantPayload>
          }
          aggregate: {
            args: Prisma.Table_RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable_Restaurant>
          }
          groupBy: {
            args: Prisma.Table_RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Table_RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.Table_RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<Table_RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Employe: {
        payload: Prisma.$EmployePayload<ExtArgs>
        fields: Prisma.EmployeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findFirst: {
            args: Prisma.EmployeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findMany: {
            args: Prisma.EmployeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          create: {
            args: Prisma.EmployeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          createMany: {
            args: Prisma.EmployeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          delete: {
            args: Prisma.EmployeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          update: {
            args: Prisma.EmployeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          deleteMany: {
            args: Prisma.EmployeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          upsert: {
            args: Prisma.EmployeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          aggregate: {
            args: Prisma.EmployeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmploye>
          }
          groupBy: {
            args: Prisma.EmployeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Plat: {
        payload: Prisma.$PlatPayload<ExtArgs>
        fields: Prisma.PlatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          findFirst: {
            args: Prisma.PlatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          findMany: {
            args: Prisma.PlatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>[]
          }
          create: {
            args: Prisma.PlatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          createMany: {
            args: Prisma.PlatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>[]
          }
          delete: {
            args: Prisma.PlatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          update: {
            args: Prisma.PlatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          deleteMany: {
            args: Prisma.PlatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>[]
          }
          upsert: {
            args: Prisma.PlatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatPayload>
          }
          aggregate: {
            args: Prisma.PlatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlat>
          }
          groupBy: {
            args: Prisma.PlatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatCountArgs<ExtArgs>
            result: $Utils.Optional<PlatCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      Ligne_Commande: {
        payload: Prisma.$Ligne_CommandePayload<ExtArgs>
        fields: Prisma.Ligne_CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ligne_CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ligne_CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          findFirst: {
            args: Prisma.Ligne_CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ligne_CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          findMany: {
            args: Prisma.Ligne_CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>[]
          }
          create: {
            args: Prisma.Ligne_CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          createMany: {
            args: Prisma.Ligne_CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Ligne_CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>[]
          }
          delete: {
            args: Prisma.Ligne_CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          update: {
            args: Prisma.Ligne_CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          deleteMany: {
            args: Prisma.Ligne_CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ligne_CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Ligne_CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>[]
          }
          upsert: {
            args: Prisma.Ligne_CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ligne_CommandePayload>
          }
          aggregate: {
            args: Prisma.Ligne_CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLigne_Commande>
          }
          groupBy: {
            args: Prisma.Ligne_CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ligne_CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ligne_CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<Ligne_CommandeCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    table_Restaurant?: Table_RestaurantOmit
    employe?: EmployeOmit
    categorie?: CategorieOmit
    plat?: PlatOmit
    reservation?: ReservationOmit
    commande?: CommandeOmit
    ligne_Commande?: Ligne_CommandeOmit
    paiement?: PaiementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    reservations: number
    commandes: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ClientCountOutputTypeCountReservationsArgs
    commandes?: boolean | ClientCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type Table_RestaurantCountOutputType
   */

  export type Table_RestaurantCountOutputType = {
    reservations: number
    commandes: number
  }

  export type Table_RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Table_RestaurantCountOutputTypeCountReservationsArgs
    commandes?: boolean | Table_RestaurantCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * Table_RestaurantCountOutputType without action
   */
  export type Table_RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_RestaurantCountOutputType
     */
    select?: Table_RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Table_RestaurantCountOutputType without action
   */
  export type Table_RestaurantCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * Table_RestaurantCountOutputType without action
   */
  export type Table_RestaurantCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type EmployeCountOutputType
   */

  export type EmployeCountOutputType = {
    commandes: number
  }

  export type EmployeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | EmployeCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeCountOutputType
     */
    select?: EmployeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    plats: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plats?: boolean | CategorieCountOutputTypeCountPlatsArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountPlatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatWhereInput
  }


  /**
   * Count Type PlatCountOutputType
   */

  export type PlatCountOutputType = {
    lignes_cmd: number
  }

  export type PlatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lignes_cmd?: boolean | PlatCountOutputTypeCountLignes_cmdArgs
  }

  // Custom InputTypes
  /**
   * PlatCountOutputType without action
   */
  export type PlatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatCountOutputType
     */
    select?: PlatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatCountOutputType without action
   */
  export type PlatCountOutputTypeCountLignes_cmdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ligne_CommandeWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    tables: number
    commandes: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | ReservationCountOutputTypeCountTablesArgs
    commandes?: boolean | ReservationCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_RestaurantWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    tables: number
    lignes: number
    paiements: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | CommandeCountOutputTypeCountTablesArgs
    lignes?: boolean | CommandeCountOutputTypeCountLignesArgs
    paiements?: boolean | CommandeCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_RestaurantWhereInput
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountLignesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ligne_CommandeWhereInput
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id_client: number | null
  }

  export type ClientSumAggregateOutputType = {
    id_client: number | null
  }

  export type ClientMinAggregateOutputType = {
    id_client: number | null
    nom: string | null
    telephone: string | null
    email: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id_client: number | null
    nom: string | null
    telephone: string | null
    email: string | null
  }

  export type ClientCountAggregateOutputType = {
    id_client: number
    nom: number
    telephone: number
    email: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id_client?: true
  }

  export type ClientSumAggregateInputType = {
    id_client?: true
  }

  export type ClientMinAggregateInputType = {
    id_client?: true
    nom?: true
    telephone?: true
    email?: true
  }

  export type ClientMaxAggregateInputType = {
    id_client?: true
    nom?: true
    telephone?: true
    email?: true
  }

  export type ClientCountAggregateInputType = {
    id_client?: true
    nom?: true
    telephone?: true
    email?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id_client: number
    nom: string
    telephone: string | null
    email: string | null
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    nom?: boolean
    telephone?: boolean
    email?: boolean
    reservations?: boolean | Client$reservationsArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    nom?: boolean
    telephone?: boolean
    email?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_client?: boolean
    nom?: boolean
    telephone?: boolean
    email?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id_client?: boolean
    nom?: boolean
    telephone?: boolean
    email?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_client" | "nom" | "telephone" | "email", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Client$reservationsArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_client: number
      nom: string
      telephone: string | null
      email: string | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id_client`
     * const clientWithId_clientOnly = await prisma.client.findMany({ select: { id_client: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id_client`
     * const clientWithId_clientOnly = await prisma.client.createManyAndReturn({
     *   select: { id_client: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id_client`
     * const clientWithId_clientOnly = await prisma.client.updateManyAndReturn({
     *   select: { id_client: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Client$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Client$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends Client$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Client$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id_client: FieldRef<"Client", 'Int'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.reservations
   */
  export type Client$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Client.commandes
   */
  export type Client$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Table_Restaurant
   */

  export type AggregateTable_Restaurant = {
    _count: Table_RestaurantCountAggregateOutputType | null
    _avg: Table_RestaurantAvgAggregateOutputType | null
    _sum: Table_RestaurantSumAggregateOutputType | null
    _min: Table_RestaurantMinAggregateOutputType | null
    _max: Table_RestaurantMaxAggregateOutputType | null
  }

  export type Table_RestaurantAvgAggregateOutputType = {
    id_table: number | null
    numero: number | null
    capacite: number | null
  }

  export type Table_RestaurantSumAggregateOutputType = {
    id_table: number | null
    numero: number | null
    capacite: number | null
  }

  export type Table_RestaurantMinAggregateOutputType = {
    id_table: number | null
    numero: number | null
    capacite: number | null
    zone: string | null
  }

  export type Table_RestaurantMaxAggregateOutputType = {
    id_table: number | null
    numero: number | null
    capacite: number | null
    zone: string | null
  }

  export type Table_RestaurantCountAggregateOutputType = {
    id_table: number
    numero: number
    capacite: number
    zone: number
    _all: number
  }


  export type Table_RestaurantAvgAggregateInputType = {
    id_table?: true
    numero?: true
    capacite?: true
  }

  export type Table_RestaurantSumAggregateInputType = {
    id_table?: true
    numero?: true
    capacite?: true
  }

  export type Table_RestaurantMinAggregateInputType = {
    id_table?: true
    numero?: true
    capacite?: true
    zone?: true
  }

  export type Table_RestaurantMaxAggregateInputType = {
    id_table?: true
    numero?: true
    capacite?: true
    zone?: true
  }

  export type Table_RestaurantCountAggregateInputType = {
    id_table?: true
    numero?: true
    capacite?: true
    zone?: true
    _all?: true
  }

  export type Table_RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Restaurant to aggregate.
     */
    where?: Table_RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Restaurants to fetch.
     */
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Table_RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Table_Restaurants
    **/
    _count?: true | Table_RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Table_RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Table_RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Table_RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Table_RestaurantMaxAggregateInputType
  }

  export type GetTable_RestaurantAggregateType<T extends Table_RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateTable_Restaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable_Restaurant[P]>
      : GetScalarType<T[P], AggregateTable_Restaurant[P]>
  }




  export type Table_RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_RestaurantWhereInput
    orderBy?: Table_RestaurantOrderByWithAggregationInput | Table_RestaurantOrderByWithAggregationInput[]
    by: Table_RestaurantScalarFieldEnum[] | Table_RestaurantScalarFieldEnum
    having?: Table_RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Table_RestaurantCountAggregateInputType | true
    _avg?: Table_RestaurantAvgAggregateInputType
    _sum?: Table_RestaurantSumAggregateInputType
    _min?: Table_RestaurantMinAggregateInputType
    _max?: Table_RestaurantMaxAggregateInputType
  }

  export type Table_RestaurantGroupByOutputType = {
    id_table: number
    numero: number
    capacite: number
    zone: string | null
    _count: Table_RestaurantCountAggregateOutputType | null
    _avg: Table_RestaurantAvgAggregateOutputType | null
    _sum: Table_RestaurantSumAggregateOutputType | null
    _min: Table_RestaurantMinAggregateOutputType | null
    _max: Table_RestaurantMaxAggregateOutputType | null
  }

  type GetTable_RestaurantGroupByPayload<T extends Table_RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Table_RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Table_RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Table_RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], Table_RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type Table_RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_table?: boolean
    numero?: boolean
    capacite?: boolean
    zone?: boolean
    reservations?: boolean | Table_Restaurant$reservationsArgs<ExtArgs>
    commandes?: boolean | Table_Restaurant$commandesArgs<ExtArgs>
    _count?: boolean | Table_RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table_Restaurant"]>

  export type Table_RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_table?: boolean
    numero?: boolean
    capacite?: boolean
    zone?: boolean
  }, ExtArgs["result"]["table_Restaurant"]>

  export type Table_RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_table?: boolean
    numero?: boolean
    capacite?: boolean
    zone?: boolean
  }, ExtArgs["result"]["table_Restaurant"]>

  export type Table_RestaurantSelectScalar = {
    id_table?: boolean
    numero?: boolean
    capacite?: boolean
    zone?: boolean
  }

  export type Table_RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_table" | "numero" | "capacite" | "zone", ExtArgs["result"]["table_Restaurant"]>
  export type Table_RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Table_Restaurant$reservationsArgs<ExtArgs>
    commandes?: boolean | Table_Restaurant$commandesArgs<ExtArgs>
    _count?: boolean | Table_RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Table_RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Table_RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Table_RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table_Restaurant"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_table: number
      numero: number
      capacite: number
      zone: string | null
    }, ExtArgs["result"]["table_Restaurant"]>
    composites: {}
  }

  type Table_RestaurantGetPayload<S extends boolean | null | undefined | Table_RestaurantDefaultArgs> = $Result.GetResult<Prisma.$Table_RestaurantPayload, S>

  type Table_RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Table_RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Table_RestaurantCountAggregateInputType | true
    }

  export interface Table_RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table_Restaurant'], meta: { name: 'Table_Restaurant' } }
    /**
     * Find zero or one Table_Restaurant that matches the filter.
     * @param {Table_RestaurantFindUniqueArgs} args - Arguments to find a Table_Restaurant
     * @example
     * // Get one Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Table_RestaurantFindUniqueArgs>(args: SelectSubset<T, Table_RestaurantFindUniqueArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table_Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Table_RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Table_Restaurant
     * @example
     * // Get one Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Table_RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, Table_RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantFindFirstArgs} args - Arguments to find a Table_Restaurant
     * @example
     * // Get one Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Table_RestaurantFindFirstArgs>(args?: SelectSubset<T, Table_RestaurantFindFirstArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantFindFirstOrThrowArgs} args - Arguments to find a Table_Restaurant
     * @example
     * // Get one Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Table_RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, Table_RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Table_Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Table_Restaurants
     * const table_Restaurants = await prisma.table_Restaurant.findMany()
     * 
     * // Get first 10 Table_Restaurants
     * const table_Restaurants = await prisma.table_Restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id_table`
     * const table_RestaurantWithId_tableOnly = await prisma.table_Restaurant.findMany({ select: { id_table: true } })
     * 
     */
    findMany<T extends Table_RestaurantFindManyArgs>(args?: SelectSubset<T, Table_RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table_Restaurant.
     * @param {Table_RestaurantCreateArgs} args - Arguments to create a Table_Restaurant.
     * @example
     * // Create one Table_Restaurant
     * const Table_Restaurant = await prisma.table_Restaurant.create({
     *   data: {
     *     // ... data to create a Table_Restaurant
     *   }
     * })
     * 
     */
    create<T extends Table_RestaurantCreateArgs>(args: SelectSubset<T, Table_RestaurantCreateArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Table_Restaurants.
     * @param {Table_RestaurantCreateManyArgs} args - Arguments to create many Table_Restaurants.
     * @example
     * // Create many Table_Restaurants
     * const table_Restaurant = await prisma.table_Restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Table_RestaurantCreateManyArgs>(args?: SelectSubset<T, Table_RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Table_Restaurants and returns the data saved in the database.
     * @param {Table_RestaurantCreateManyAndReturnArgs} args - Arguments to create many Table_Restaurants.
     * @example
     * // Create many Table_Restaurants
     * const table_Restaurant = await prisma.table_Restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Table_Restaurants and only return the `id_table`
     * const table_RestaurantWithId_tableOnly = await prisma.table_Restaurant.createManyAndReturn({
     *   select: { id_table: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Table_RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, Table_RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table_Restaurant.
     * @param {Table_RestaurantDeleteArgs} args - Arguments to delete one Table_Restaurant.
     * @example
     * // Delete one Table_Restaurant
     * const Table_Restaurant = await prisma.table_Restaurant.delete({
     *   where: {
     *     // ... filter to delete one Table_Restaurant
     *   }
     * })
     * 
     */
    delete<T extends Table_RestaurantDeleteArgs>(args: SelectSubset<T, Table_RestaurantDeleteArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table_Restaurant.
     * @param {Table_RestaurantUpdateArgs} args - Arguments to update one Table_Restaurant.
     * @example
     * // Update one Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Table_RestaurantUpdateArgs>(args: SelectSubset<T, Table_RestaurantUpdateArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Table_Restaurants.
     * @param {Table_RestaurantDeleteManyArgs} args - Arguments to filter Table_Restaurants to delete.
     * @example
     * // Delete a few Table_Restaurants
     * const { count } = await prisma.table_Restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Table_RestaurantDeleteManyArgs>(args?: SelectSubset<T, Table_RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Table_Restaurants
     * const table_Restaurant = await prisma.table_Restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Table_RestaurantUpdateManyArgs>(args: SelectSubset<T, Table_RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Restaurants and returns the data updated in the database.
     * @param {Table_RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Table_Restaurants.
     * @example
     * // Update many Table_Restaurants
     * const table_Restaurant = await prisma.table_Restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Table_Restaurants and only return the `id_table`
     * const table_RestaurantWithId_tableOnly = await prisma.table_Restaurant.updateManyAndReturn({
     *   select: { id_table: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Table_RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, Table_RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table_Restaurant.
     * @param {Table_RestaurantUpsertArgs} args - Arguments to update or create a Table_Restaurant.
     * @example
     * // Update or create a Table_Restaurant
     * const table_Restaurant = await prisma.table_Restaurant.upsert({
     *   create: {
     *     // ... data to create a Table_Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table_Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends Table_RestaurantUpsertArgs>(args: SelectSubset<T, Table_RestaurantUpsertArgs<ExtArgs>>): Prisma__Table_RestaurantClient<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Table_Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantCountArgs} args - Arguments to filter Table_Restaurants to count.
     * @example
     * // Count the number of Table_Restaurants
     * const count = await prisma.table_Restaurant.count({
     *   where: {
     *     // ... the filter for the Table_Restaurants we want to count
     *   }
     * })
    **/
    count<T extends Table_RestaurantCountArgs>(
      args?: Subset<T, Table_RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Table_RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table_Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Table_RestaurantAggregateArgs>(args: Subset<T, Table_RestaurantAggregateArgs>): Prisma.PrismaPromise<GetTable_RestaurantAggregateType<T>>

    /**
     * Group by Table_Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Table_RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Table_RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: Table_RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Table_RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTable_RestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table_Restaurant model
   */
  readonly fields: Table_RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table_Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Table_RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Table_Restaurant$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Table_Restaurant$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends Table_Restaurant$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Table_Restaurant$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table_Restaurant model
   */
  interface Table_RestaurantFieldRefs {
    readonly id_table: FieldRef<"Table_Restaurant", 'Int'>
    readonly numero: FieldRef<"Table_Restaurant", 'Int'>
    readonly capacite: FieldRef<"Table_Restaurant", 'Int'>
    readonly zone: FieldRef<"Table_Restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Table_Restaurant findUnique
   */
  export type Table_RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Table_Restaurant to fetch.
     */
    where: Table_RestaurantWhereUniqueInput
  }

  /**
   * Table_Restaurant findUniqueOrThrow
   */
  export type Table_RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Table_Restaurant to fetch.
     */
    where: Table_RestaurantWhereUniqueInput
  }

  /**
   * Table_Restaurant findFirst
   */
  export type Table_RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Table_Restaurant to fetch.
     */
    where?: Table_RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Restaurants to fetch.
     */
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Restaurants.
     */
    cursor?: Table_RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Restaurants.
     */
    distinct?: Table_RestaurantScalarFieldEnum | Table_RestaurantScalarFieldEnum[]
  }

  /**
   * Table_Restaurant findFirstOrThrow
   */
  export type Table_RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Table_Restaurant to fetch.
     */
    where?: Table_RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Restaurants to fetch.
     */
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Restaurants.
     */
    cursor?: Table_RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Restaurants.
     */
    distinct?: Table_RestaurantScalarFieldEnum | Table_RestaurantScalarFieldEnum[]
  }

  /**
   * Table_Restaurant findMany
   */
  export type Table_RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Table_Restaurants to fetch.
     */
    where?: Table_RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Restaurants to fetch.
     */
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Table_Restaurants.
     */
    cursor?: Table_RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Restaurants.
     */
    skip?: number
    distinct?: Table_RestaurantScalarFieldEnum | Table_RestaurantScalarFieldEnum[]
  }

  /**
   * Table_Restaurant create
   */
  export type Table_RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Table_Restaurant.
     */
    data: XOR<Table_RestaurantCreateInput, Table_RestaurantUncheckedCreateInput>
  }

  /**
   * Table_Restaurant createMany
   */
  export type Table_RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Table_Restaurants.
     */
    data: Table_RestaurantCreateManyInput | Table_RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table_Restaurant createManyAndReturn
   */
  export type Table_RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Table_Restaurants.
     */
    data: Table_RestaurantCreateManyInput | Table_RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table_Restaurant update
   */
  export type Table_RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Table_Restaurant.
     */
    data: XOR<Table_RestaurantUpdateInput, Table_RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Table_Restaurant to update.
     */
    where: Table_RestaurantWhereUniqueInput
  }

  /**
   * Table_Restaurant updateMany
   */
  export type Table_RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Table_Restaurants.
     */
    data: XOR<Table_RestaurantUpdateManyMutationInput, Table_RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Table_Restaurants to update
     */
    where?: Table_RestaurantWhereInput
    /**
     * Limit how many Table_Restaurants to update.
     */
    limit?: number
  }

  /**
   * Table_Restaurant updateManyAndReturn
   */
  export type Table_RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Table_Restaurants.
     */
    data: XOR<Table_RestaurantUpdateManyMutationInput, Table_RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Table_Restaurants to update
     */
    where?: Table_RestaurantWhereInput
    /**
     * Limit how many Table_Restaurants to update.
     */
    limit?: number
  }

  /**
   * Table_Restaurant upsert
   */
  export type Table_RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Table_Restaurant to update in case it exists.
     */
    where: Table_RestaurantWhereUniqueInput
    /**
     * In case the Table_Restaurant found by the `where` argument doesn't exist, create a new Table_Restaurant with this data.
     */
    create: XOR<Table_RestaurantCreateInput, Table_RestaurantUncheckedCreateInput>
    /**
     * In case the Table_Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Table_RestaurantUpdateInput, Table_RestaurantUncheckedUpdateInput>
  }

  /**
   * Table_Restaurant delete
   */
  export type Table_RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Table_Restaurant to delete.
     */
    where: Table_RestaurantWhereUniqueInput
  }

  /**
   * Table_Restaurant deleteMany
   */
  export type Table_RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Restaurants to delete
     */
    where?: Table_RestaurantWhereInput
    /**
     * Limit how many Table_Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Table_Restaurant.reservations
   */
  export type Table_Restaurant$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Table_Restaurant.commandes
   */
  export type Table_Restaurant$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Table_Restaurant without action
   */
  export type Table_RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Employe
   */

  export type AggregateEmploye = {
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  export type EmployeAvgAggregateOutputType = {
    id_employe: number | null
  }

  export type EmployeSumAggregateOutputType = {
    id_employe: number | null
  }

  export type EmployeMinAggregateOutputType = {
    id_employe: number | null
    nom: string | null
    prenom: string | null
    role: string | null
  }

  export type EmployeMaxAggregateOutputType = {
    id_employe: number | null
    nom: string | null
    prenom: string | null
    role: string | null
  }

  export type EmployeCountAggregateOutputType = {
    id_employe: number
    nom: number
    prenom: number
    role: number
    _all: number
  }


  export type EmployeAvgAggregateInputType = {
    id_employe?: true
  }

  export type EmployeSumAggregateInputType = {
    id_employe?: true
  }

  export type EmployeMinAggregateInputType = {
    id_employe?: true
    nom?: true
    prenom?: true
    role?: true
  }

  export type EmployeMaxAggregateInputType = {
    id_employe?: true
    nom?: true
    prenom?: true
    role?: true
  }

  export type EmployeCountAggregateInputType = {
    id_employe?: true
    nom?: true
    prenom?: true
    role?: true
    _all?: true
  }

  export type EmployeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employe to aggregate.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employes
    **/
    _count?: true | EmployeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeMaxAggregateInputType
  }

  export type GetEmployeAggregateType<T extends EmployeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmploye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmploye[P]>
      : GetScalarType<T[P], AggregateEmploye[P]>
  }




  export type EmployeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithAggregationInput | EmployeOrderByWithAggregationInput[]
    by: EmployeScalarFieldEnum[] | EmployeScalarFieldEnum
    having?: EmployeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeCountAggregateInputType | true
    _avg?: EmployeAvgAggregateInputType
    _sum?: EmployeSumAggregateInputType
    _min?: EmployeMinAggregateInputType
    _max?: EmployeMaxAggregateInputType
  }

  export type EmployeGroupByOutputType = {
    id_employe: number
    nom: string
    prenom: string
    role: string
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  type GetEmployeGroupByPayload<T extends EmployeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_employe?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
    commandes?: boolean | Employe$commandesArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_employe?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_employe?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectScalar = {
    id_employe?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
  }

  export type EmployeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_employe" | "nom" | "prenom" | "role", ExtArgs["result"]["employe"]>
  export type EmployeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | Employe$commandesArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employe"
    objects: {
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_employe: number
      nom: string
      prenom: string
      role: string
    }, ExtArgs["result"]["employe"]>
    composites: {}
  }

  type EmployeGetPayload<S extends boolean | null | undefined | EmployeDefaultArgs> = $Result.GetResult<Prisma.$EmployePayload, S>

  type EmployeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeCountAggregateInputType | true
    }

  export interface EmployeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employe'], meta: { name: 'Employe' } }
    /**
     * Find zero or one Employe that matches the filter.
     * @param {EmployeFindUniqueArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeFindUniqueArgs>(args: SelectSubset<T, EmployeFindUniqueArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeFindUniqueOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeFindFirstArgs>(args?: SelectSubset<T, EmployeFindFirstArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employes
     * const employes = await prisma.employe.findMany()
     * 
     * // Get first 10 Employes
     * const employes = await prisma.employe.findMany({ take: 10 })
     * 
     * // Only select the `id_employe`
     * const employeWithId_employeOnly = await prisma.employe.findMany({ select: { id_employe: true } })
     * 
     */
    findMany<T extends EmployeFindManyArgs>(args?: SelectSubset<T, EmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employe.
     * @param {EmployeCreateArgs} args - Arguments to create a Employe.
     * @example
     * // Create one Employe
     * const Employe = await prisma.employe.create({
     *   data: {
     *     // ... data to create a Employe
     *   }
     * })
     * 
     */
    create<T extends EmployeCreateArgs>(args: SelectSubset<T, EmployeCreateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employes.
     * @param {EmployeCreateManyArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeCreateManyArgs>(args?: SelectSubset<T, EmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employes and returns the data saved in the database.
     * @param {EmployeCreateManyAndReturnArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employes and only return the `id_employe`
     * const employeWithId_employeOnly = await prisma.employe.createManyAndReturn({
     *   select: { id_employe: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employe.
     * @param {EmployeDeleteArgs} args - Arguments to delete one Employe.
     * @example
     * // Delete one Employe
     * const Employe = await prisma.employe.delete({
     *   where: {
     *     // ... filter to delete one Employe
     *   }
     * })
     * 
     */
    delete<T extends EmployeDeleteArgs>(args: SelectSubset<T, EmployeDeleteArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employe.
     * @param {EmployeUpdateArgs} args - Arguments to update one Employe.
     * @example
     * // Update one Employe
     * const employe = await prisma.employe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeUpdateArgs>(args: SelectSubset<T, EmployeUpdateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employes.
     * @param {EmployeDeleteManyArgs} args - Arguments to filter Employes to delete.
     * @example
     * // Delete a few Employes
     * const { count } = await prisma.employe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeDeleteManyArgs>(args?: SelectSubset<T, EmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeUpdateManyArgs>(args: SelectSubset<T, EmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes and returns the data updated in the database.
     * @param {EmployeUpdateManyAndReturnArgs} args - Arguments to update many Employes.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employes and only return the `id_employe`
     * const employeWithId_employeOnly = await prisma.employe.updateManyAndReturn({
     *   select: { id_employe: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employe.
     * @param {EmployeUpsertArgs} args - Arguments to update or create a Employe.
     * @example
     * // Update or create a Employe
     * const employe = await prisma.employe.upsert({
     *   create: {
     *     // ... data to create a Employe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employe we want to update
     *   }
     * })
     */
    upsert<T extends EmployeUpsertArgs>(args: SelectSubset<T, EmployeUpsertArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeCountArgs} args - Arguments to filter Employes to count.
     * @example
     * // Count the number of Employes
     * const count = await prisma.employe.count({
     *   where: {
     *     // ... the filter for the Employes we want to count
     *   }
     * })
    **/
    count<T extends EmployeCountArgs>(
      args?: Subset<T, EmployeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeAggregateArgs>(args: Subset<T, EmployeAggregateArgs>): Prisma.PrismaPromise<GetEmployeAggregateType<T>>

    /**
     * Group by Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employe model
   */
  readonly fields: EmployeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commandes<T extends Employe$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Employe$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employe model
   */
  interface EmployeFieldRefs {
    readonly id_employe: FieldRef<"Employe", 'Int'>
    readonly nom: FieldRef<"Employe", 'String'>
    readonly prenom: FieldRef<"Employe", 'String'>
    readonly role: FieldRef<"Employe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employe findUnique
   */
  export type EmployeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findUniqueOrThrow
   */
  export type EmployeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findFirst
   */
  export type EmployeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findFirstOrThrow
   */
  export type EmployeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findMany
   */
  export type EmployeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe create
   */
  export type EmployeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employe.
     */
    data: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
  }

  /**
   * Employe createMany
   */
  export type EmployeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe createManyAndReturn
   */
  export type EmployeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe update
   */
  export type EmployeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employe.
     */
    data: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
    /**
     * Choose, which Employe to update.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe updateMany
   */
  export type EmployeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe updateManyAndReturn
   */
  export type EmployeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe upsert
   */
  export type EmployeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employe to update in case it exists.
     */
    where: EmployeWhereUniqueInput
    /**
     * In case the Employe found by the `where` argument doesn't exist, create a new Employe with this data.
     */
    create: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
    /**
     * In case the Employe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
  }

  /**
   * Employe delete
   */
  export type EmployeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter which Employe to delete.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe deleteMany
   */
  export type EmployeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to delete
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to delete.
     */
    limit?: number
  }

  /**
   * Employe.commandes
   */
  export type Employe$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Employe without action
   */
  export type EmployeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id_categorie: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id_categorie: number | null
    libelle: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id_categorie: number | null
    libelle: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id_categorie: number
    libelle: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieSumAggregateInputType = {
    id_categorie?: true
  }

  export type CategorieMinAggregateInputType = {
    id_categorie?: true
    libelle?: true
  }

  export type CategorieMaxAggregateInputType = {
    id_categorie?: true
    libelle?: true
  }

  export type CategorieCountAggregateInputType = {
    id_categorie?: true
    libelle?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id_categorie: number
    libelle: string
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    libelle?: boolean
    plats?: boolean | Categorie$platsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    libelle?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categorie?: boolean
    libelle?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id_categorie?: boolean
    libelle?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categorie" | "libelle", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plats?: boolean | Categorie$platsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      plats: Prisma.$PlatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categorie: number
      libelle: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.findMany({ select: { id_categorie: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id_categorie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id_categorie`
     * const categorieWithId_categorieOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id_categorie: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plats<T extends Categorie$platsArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$platsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id_categorie: FieldRef<"Categorie", 'Int'>
    readonly libelle: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.plats
   */
  export type Categorie$platsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    where?: PlatWhereInput
    orderBy?: PlatOrderByWithRelationInput | PlatOrderByWithRelationInput[]
    cursor?: PlatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatScalarFieldEnum | PlatScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Plat
   */

  export type AggregatePlat = {
    _count: PlatCountAggregateOutputType | null
    _avg: PlatAvgAggregateOutputType | null
    _sum: PlatSumAggregateOutputType | null
    _min: PlatMinAggregateOutputType | null
    _max: PlatMaxAggregateOutputType | null
  }

  export type PlatAvgAggregateOutputType = {
    id_plat: number | null
    prix_actuel: Decimal | null
    id_categorie: number | null
  }

  export type PlatSumAggregateOutputType = {
    id_plat: number | null
    prix_actuel: Decimal | null
    id_categorie: number | null
  }

  export type PlatMinAggregateOutputType = {
    id_plat: number | null
    libelle: string | null
    prix_actuel: Decimal | null
    disponible: boolean | null
    id_categorie: number | null
  }

  export type PlatMaxAggregateOutputType = {
    id_plat: number | null
    libelle: string | null
    prix_actuel: Decimal | null
    disponible: boolean | null
    id_categorie: number | null
  }

  export type PlatCountAggregateOutputType = {
    id_plat: number
    libelle: number
    prix_actuel: number
    disponible: number
    id_categorie: number
    _all: number
  }


  export type PlatAvgAggregateInputType = {
    id_plat?: true
    prix_actuel?: true
    id_categorie?: true
  }

  export type PlatSumAggregateInputType = {
    id_plat?: true
    prix_actuel?: true
    id_categorie?: true
  }

  export type PlatMinAggregateInputType = {
    id_plat?: true
    libelle?: true
    prix_actuel?: true
    disponible?: true
    id_categorie?: true
  }

  export type PlatMaxAggregateInputType = {
    id_plat?: true
    libelle?: true
    prix_actuel?: true
    disponible?: true
    id_categorie?: true
  }

  export type PlatCountAggregateInputType = {
    id_plat?: true
    libelle?: true
    prix_actuel?: true
    disponible?: true
    id_categorie?: true
    _all?: true
  }

  export type PlatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plat to aggregate.
     */
    where?: PlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plats to fetch.
     */
    orderBy?: PlatOrderByWithRelationInput | PlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plats
    **/
    _count?: true | PlatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatMaxAggregateInputType
  }

  export type GetPlatAggregateType<T extends PlatAggregateArgs> = {
        [P in keyof T & keyof AggregatePlat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlat[P]>
      : GetScalarType<T[P], AggregatePlat[P]>
  }




  export type PlatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatWhereInput
    orderBy?: PlatOrderByWithAggregationInput | PlatOrderByWithAggregationInput[]
    by: PlatScalarFieldEnum[] | PlatScalarFieldEnum
    having?: PlatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatCountAggregateInputType | true
    _avg?: PlatAvgAggregateInputType
    _sum?: PlatSumAggregateInputType
    _min?: PlatMinAggregateInputType
    _max?: PlatMaxAggregateInputType
  }

  export type PlatGroupByOutputType = {
    id_plat: number
    libelle: string
    prix_actuel: Decimal
    disponible: boolean
    id_categorie: number
    _count: PlatCountAggregateOutputType | null
    _avg: PlatAvgAggregateOutputType | null
    _sum: PlatSumAggregateOutputType | null
    _min: PlatMinAggregateOutputType | null
    _max: PlatMaxAggregateOutputType | null
  }

  type GetPlatGroupByPayload<T extends PlatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatGroupByOutputType[P]>
            : GetScalarType<T[P], PlatGroupByOutputType[P]>
        }
      >
    >


  export type PlatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plat?: boolean
    libelle?: boolean
    prix_actuel?: boolean
    disponible?: boolean
    id_categorie?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    lignes_cmd?: boolean | Plat$lignes_cmdArgs<ExtArgs>
    _count?: boolean | PlatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plat"]>

  export type PlatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plat?: boolean
    libelle?: boolean
    prix_actuel?: boolean
    disponible?: boolean
    id_categorie?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plat"]>

  export type PlatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plat?: boolean
    libelle?: boolean
    prix_actuel?: boolean
    disponible?: boolean
    id_categorie?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plat"]>

  export type PlatSelectScalar = {
    id_plat?: boolean
    libelle?: boolean
    prix_actuel?: boolean
    disponible?: boolean
    id_categorie?: boolean
  }

  export type PlatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_plat" | "libelle" | "prix_actuel" | "disponible" | "id_categorie", ExtArgs["result"]["plat"]>
  export type PlatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    lignes_cmd?: boolean | Plat$lignes_cmdArgs<ExtArgs>
    _count?: boolean | PlatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }
  export type PlatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }

  export type $PlatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plat"
    objects: {
      categorie: Prisma.$CategoriePayload<ExtArgs>
      lignes_cmd: Prisma.$Ligne_CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_plat: number
      libelle: string
      prix_actuel: Prisma.Decimal
      disponible: boolean
      id_categorie: number
    }, ExtArgs["result"]["plat"]>
    composites: {}
  }

  type PlatGetPayload<S extends boolean | null | undefined | PlatDefaultArgs> = $Result.GetResult<Prisma.$PlatPayload, S>

  type PlatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatCountAggregateInputType | true
    }

  export interface PlatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plat'], meta: { name: 'Plat' } }
    /**
     * Find zero or one Plat that matches the filter.
     * @param {PlatFindUniqueArgs} args - Arguments to find a Plat
     * @example
     * // Get one Plat
     * const plat = await prisma.plat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatFindUniqueArgs>(args: SelectSubset<T, PlatFindUniqueArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatFindUniqueOrThrowArgs} args - Arguments to find a Plat
     * @example
     * // Get one Plat
     * const plat = await prisma.plat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatFindFirstArgs} args - Arguments to find a Plat
     * @example
     * // Get one Plat
     * const plat = await prisma.plat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatFindFirstArgs>(args?: SelectSubset<T, PlatFindFirstArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatFindFirstOrThrowArgs} args - Arguments to find a Plat
     * @example
     * // Get one Plat
     * const plat = await prisma.plat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plats
     * const plats = await prisma.plat.findMany()
     * 
     * // Get first 10 Plats
     * const plats = await prisma.plat.findMany({ take: 10 })
     * 
     * // Only select the `id_plat`
     * const platWithId_platOnly = await prisma.plat.findMany({ select: { id_plat: true } })
     * 
     */
    findMany<T extends PlatFindManyArgs>(args?: SelectSubset<T, PlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plat.
     * @param {PlatCreateArgs} args - Arguments to create a Plat.
     * @example
     * // Create one Plat
     * const Plat = await prisma.plat.create({
     *   data: {
     *     // ... data to create a Plat
     *   }
     * })
     * 
     */
    create<T extends PlatCreateArgs>(args: SelectSubset<T, PlatCreateArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plats.
     * @param {PlatCreateManyArgs} args - Arguments to create many Plats.
     * @example
     * // Create many Plats
     * const plat = await prisma.plat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatCreateManyArgs>(args?: SelectSubset<T, PlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plats and returns the data saved in the database.
     * @param {PlatCreateManyAndReturnArgs} args - Arguments to create many Plats.
     * @example
     * // Create many Plats
     * const plat = await prisma.plat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plats and only return the `id_plat`
     * const platWithId_platOnly = await prisma.plat.createManyAndReturn({
     *   select: { id_plat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plat.
     * @param {PlatDeleteArgs} args - Arguments to delete one Plat.
     * @example
     * // Delete one Plat
     * const Plat = await prisma.plat.delete({
     *   where: {
     *     // ... filter to delete one Plat
     *   }
     * })
     * 
     */
    delete<T extends PlatDeleteArgs>(args: SelectSubset<T, PlatDeleteArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plat.
     * @param {PlatUpdateArgs} args - Arguments to update one Plat.
     * @example
     * // Update one Plat
     * const plat = await prisma.plat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatUpdateArgs>(args: SelectSubset<T, PlatUpdateArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plats.
     * @param {PlatDeleteManyArgs} args - Arguments to filter Plats to delete.
     * @example
     * // Delete a few Plats
     * const { count } = await prisma.plat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatDeleteManyArgs>(args?: SelectSubset<T, PlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plats
     * const plat = await prisma.plat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatUpdateManyArgs>(args: SelectSubset<T, PlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plats and returns the data updated in the database.
     * @param {PlatUpdateManyAndReturnArgs} args - Arguments to update many Plats.
     * @example
     * // Update many Plats
     * const plat = await prisma.plat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plats and only return the `id_plat`
     * const platWithId_platOnly = await prisma.plat.updateManyAndReturn({
     *   select: { id_plat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plat.
     * @param {PlatUpsertArgs} args - Arguments to update or create a Plat.
     * @example
     * // Update or create a Plat
     * const plat = await prisma.plat.upsert({
     *   create: {
     *     // ... data to create a Plat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plat we want to update
     *   }
     * })
     */
    upsert<T extends PlatUpsertArgs>(args: SelectSubset<T, PlatUpsertArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatCountArgs} args - Arguments to filter Plats to count.
     * @example
     * // Count the number of Plats
     * const count = await prisma.plat.count({
     *   where: {
     *     // ... the filter for the Plats we want to count
     *   }
     * })
    **/
    count<T extends PlatCountArgs>(
      args?: Subset<T, PlatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatAggregateArgs>(args: Subset<T, PlatAggregateArgs>): Prisma.PrismaPromise<GetPlatAggregateType<T>>

    /**
     * Group by Plat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatGroupByArgs['orderBy'] }
        : { orderBy?: PlatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plat model
   */
  readonly fields: PlatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lignes_cmd<T extends Plat$lignes_cmdArgs<ExtArgs> = {}>(args?: Subset<T, Plat$lignes_cmdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plat model
   */
  interface PlatFieldRefs {
    readonly id_plat: FieldRef<"Plat", 'Int'>
    readonly libelle: FieldRef<"Plat", 'String'>
    readonly prix_actuel: FieldRef<"Plat", 'Decimal'>
    readonly disponible: FieldRef<"Plat", 'Boolean'>
    readonly id_categorie: FieldRef<"Plat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Plat findUnique
   */
  export type PlatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter, which Plat to fetch.
     */
    where: PlatWhereUniqueInput
  }

  /**
   * Plat findUniqueOrThrow
   */
  export type PlatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter, which Plat to fetch.
     */
    where: PlatWhereUniqueInput
  }

  /**
   * Plat findFirst
   */
  export type PlatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter, which Plat to fetch.
     */
    where?: PlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plats to fetch.
     */
    orderBy?: PlatOrderByWithRelationInput | PlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plats.
     */
    cursor?: PlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plats.
     */
    distinct?: PlatScalarFieldEnum | PlatScalarFieldEnum[]
  }

  /**
   * Plat findFirstOrThrow
   */
  export type PlatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter, which Plat to fetch.
     */
    where?: PlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plats to fetch.
     */
    orderBy?: PlatOrderByWithRelationInput | PlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plats.
     */
    cursor?: PlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plats.
     */
    distinct?: PlatScalarFieldEnum | PlatScalarFieldEnum[]
  }

  /**
   * Plat findMany
   */
  export type PlatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter, which Plats to fetch.
     */
    where?: PlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plats to fetch.
     */
    orderBy?: PlatOrderByWithRelationInput | PlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plats.
     */
    cursor?: PlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plats.
     */
    skip?: number
    distinct?: PlatScalarFieldEnum | PlatScalarFieldEnum[]
  }

  /**
   * Plat create
   */
  export type PlatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * The data needed to create a Plat.
     */
    data: XOR<PlatCreateInput, PlatUncheckedCreateInput>
  }

  /**
   * Plat createMany
   */
  export type PlatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plats.
     */
    data: PlatCreateManyInput | PlatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plat createManyAndReturn
   */
  export type PlatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * The data used to create many Plats.
     */
    data: PlatCreateManyInput | PlatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plat update
   */
  export type PlatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * The data needed to update a Plat.
     */
    data: XOR<PlatUpdateInput, PlatUncheckedUpdateInput>
    /**
     * Choose, which Plat to update.
     */
    where: PlatWhereUniqueInput
  }

  /**
   * Plat updateMany
   */
  export type PlatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plats.
     */
    data: XOR<PlatUpdateManyMutationInput, PlatUncheckedUpdateManyInput>
    /**
     * Filter which Plats to update
     */
    where?: PlatWhereInput
    /**
     * Limit how many Plats to update.
     */
    limit?: number
  }

  /**
   * Plat updateManyAndReturn
   */
  export type PlatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * The data used to update Plats.
     */
    data: XOR<PlatUpdateManyMutationInput, PlatUncheckedUpdateManyInput>
    /**
     * Filter which Plats to update
     */
    where?: PlatWhereInput
    /**
     * Limit how many Plats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plat upsert
   */
  export type PlatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * The filter to search for the Plat to update in case it exists.
     */
    where: PlatWhereUniqueInput
    /**
     * In case the Plat found by the `where` argument doesn't exist, create a new Plat with this data.
     */
    create: XOR<PlatCreateInput, PlatUncheckedCreateInput>
    /**
     * In case the Plat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatUpdateInput, PlatUncheckedUpdateInput>
  }

  /**
   * Plat delete
   */
  export type PlatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
    /**
     * Filter which Plat to delete.
     */
    where: PlatWhereUniqueInput
  }

  /**
   * Plat deleteMany
   */
  export type PlatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plats to delete
     */
    where?: PlatWhereInput
    /**
     * Limit how many Plats to delete.
     */
    limit?: number
  }

  /**
   * Plat.lignes_cmd
   */
  export type Plat$lignes_cmdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    where?: Ligne_CommandeWhereInput
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    cursor?: Ligne_CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ligne_CommandeScalarFieldEnum | Ligne_CommandeScalarFieldEnum[]
  }

  /**
   * Plat without action
   */
  export type PlatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plat
     */
    select?: PlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plat
     */
    omit?: PlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id_reservation: number | null
    nb_personnes: number | null
    id_client: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id_reservation: number | null
    nb_personnes: number | null
    id_client: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id_reservation: number | null
    date_heure: Date | null
    nb_personnes: number | null
    statut: string | null
    id_client: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id_reservation: number | null
    date_heure: Date | null
    nb_personnes: number | null
    statut: string | null
    id_client: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id_reservation: number
    date_heure: number
    nb_personnes: number
    statut: number
    id_client: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id_reservation?: true
    nb_personnes?: true
    id_client?: true
  }

  export type ReservationSumAggregateInputType = {
    id_reservation?: true
    nb_personnes?: true
    id_client?: true
  }

  export type ReservationMinAggregateInputType = {
    id_reservation?: true
    date_heure?: true
    nb_personnes?: true
    statut?: true
    id_client?: true
  }

  export type ReservationMaxAggregateInputType = {
    id_reservation?: true
    date_heure?: true
    nb_personnes?: true
    statut?: true
    id_client?: true
  }

  export type ReservationCountAggregateInputType = {
    id_reservation?: true
    date_heure?: true
    nb_personnes?: true
    statut?: true
    id_client?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id_reservation: number
    date_heure: Date
    nb_personnes: number
    statut: string
    id_client: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    date_heure?: boolean
    nb_personnes?: boolean
    statut?: boolean
    id_client?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tables?: boolean | Reservation$tablesArgs<ExtArgs>
    commandes?: boolean | Reservation$commandesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    date_heure?: boolean
    nb_personnes?: boolean
    statut?: boolean
    id_client?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservation?: boolean
    date_heure?: boolean
    nb_personnes?: boolean
    statut?: boolean
    id_client?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id_reservation?: boolean
    date_heure?: boolean
    nb_personnes?: boolean
    statut?: boolean
    id_client?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reservation" | "date_heure" | "nb_personnes" | "statut" | "id_client", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tables?: boolean | Reservation$tablesArgs<ExtArgs>
    commandes?: boolean | Reservation$commandesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      tables: Prisma.$Table_RestaurantPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reservation: number
      date_heure: Date
      nb_personnes: number
      statut: string
      id_client: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.findMany({ select: { id_reservation: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id_reservation: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id_reservation`
     * const reservationWithId_reservationOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id_reservation: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tables<T extends Reservation$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends Reservation$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id_reservation: FieldRef<"Reservation", 'Int'>
    readonly date_heure: FieldRef<"Reservation", 'DateTime'>
    readonly nb_personnes: FieldRef<"Reservation", 'Int'>
    readonly statut: FieldRef<"Reservation", 'String'>
    readonly id_client: FieldRef<"Reservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.tables
   */
  export type Reservation$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    where?: Table_RestaurantWhereInput
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    cursor?: Table_RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Table_RestaurantScalarFieldEnum | Table_RestaurantScalarFieldEnum[]
  }

  /**
   * Reservation.commandes
   */
  export type Reservation$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    id_commande: number | null
    id_employe: number | null
    id_client: number | null
    id_reservation: number | null
  }

  export type CommandeSumAggregateOutputType = {
    id_commande: number | null
    id_employe: number | null
    id_client: number | null
    id_reservation: number | null
  }

  export type CommandeMinAggregateOutputType = {
    id_commande: number | null
    date_creation: Date | null
    type_cmd: string | null
    statut_cuisine: string | null
    id_employe: number | null
    id_client: number | null
    id_reservation: number | null
  }

  export type CommandeMaxAggregateOutputType = {
    id_commande: number | null
    date_creation: Date | null
    type_cmd: string | null
    statut_cuisine: string | null
    id_employe: number | null
    id_client: number | null
    id_reservation: number | null
  }

  export type CommandeCountAggregateOutputType = {
    id_commande: number
    date_creation: number
    type_cmd: number
    statut_cuisine: number
    id_employe: number
    id_client: number
    id_reservation: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    id_commande?: true
    id_employe?: true
    id_client?: true
    id_reservation?: true
  }

  export type CommandeSumAggregateInputType = {
    id_commande?: true
    id_employe?: true
    id_client?: true
    id_reservation?: true
  }

  export type CommandeMinAggregateInputType = {
    id_commande?: true
    date_creation?: true
    type_cmd?: true
    statut_cuisine?: true
    id_employe?: true
    id_client?: true
    id_reservation?: true
  }

  export type CommandeMaxAggregateInputType = {
    id_commande?: true
    date_creation?: true
    type_cmd?: true
    statut_cuisine?: true
    id_employe?: true
    id_client?: true
    id_reservation?: true
  }

  export type CommandeCountAggregateInputType = {
    id_commande?: true
    date_creation?: true
    type_cmd?: true
    statut_cuisine?: true
    id_employe?: true
    id_client?: true
    id_reservation?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id_commande: number
    date_creation: Date
    type_cmd: string
    statut_cuisine: string
    id_employe: number
    id_client: number | null
    id_reservation: number | null
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_creation?: boolean
    type_cmd?: boolean
    statut_cuisine?: boolean
    id_employe?: boolean
    id_client?: boolean
    id_reservation?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
    tables?: boolean | Commande$tablesArgs<ExtArgs>
    lignes?: boolean | Commande$lignesArgs<ExtArgs>
    paiements?: boolean | Commande$paiementsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_creation?: boolean
    type_cmd?: boolean
    statut_cuisine?: boolean
    id_employe?: boolean
    id_client?: boolean
    id_reservation?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commande?: boolean
    date_creation?: boolean
    type_cmd?: boolean
    statut_cuisine?: boolean
    id_employe?: boolean
    id_client?: boolean
    id_reservation?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectScalar = {
    id_commande?: boolean
    date_creation?: boolean
    type_cmd?: boolean
    statut_cuisine?: boolean
    id_employe?: boolean
    id_client?: boolean
    id_reservation?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_commande" | "date_creation" | "type_cmd" | "statut_cuisine" | "id_employe" | "id_client" | "id_reservation", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
    tables?: boolean | Commande$tablesArgs<ExtArgs>
    lignes?: boolean | Commande$lignesArgs<ExtArgs>
    paiements?: boolean | Commande$paiementsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
  }
  export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    client?: boolean | Commande$clientArgs<ExtArgs>
    reservation?: boolean | Commande$reservationArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      employe: Prisma.$EmployePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs> | null
      reservation: Prisma.$ReservationPayload<ExtArgs> | null
      tables: Prisma.$Table_RestaurantPayload<ExtArgs>[]
      lignes: Prisma.$Ligne_CommandePayload<ExtArgs>[]
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_commande: number
      date_creation: Date
      type_cmd: string
      statut_cuisine: string
      id_employe: number
      id_client: number | null
      id_reservation: number | null
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.findMany({ select: { id_commande: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.createManyAndReturn({
     *   select: { id_commande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commandes and only return the `id_commande`
     * const commandeWithId_commandeOnly = await prisma.commande.updateManyAndReturn({
     *   select: { id_commande: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeDefaultArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends Commande$clientArgs<ExtArgs> = {}>(args?: Subset<T, Commande$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservation<T extends Commande$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Commande$reservationArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tables<T extends Commande$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Commande$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lignes<T extends Commande$lignesArgs<ExtArgs> = {}>(args?: Subset<T, Commande$lignesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends Commande$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, Commande$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly id_commande: FieldRef<"Commande", 'Int'>
    readonly date_creation: FieldRef<"Commande", 'DateTime'>
    readonly type_cmd: FieldRef<"Commande", 'String'>
    readonly statut_cuisine: FieldRef<"Commande", 'String'>
    readonly id_employe: FieldRef<"Commande", 'Int'>
    readonly id_client: FieldRef<"Commande", 'Int'>
    readonly id_reservation: FieldRef<"Commande", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande createManyAndReturn
   */
  export type CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande updateManyAndReturn
   */
  export type CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande.client
   */
  export type Commande$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Commande.reservation
   */
  export type Commande$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
  }

  /**
   * Commande.tables
   */
  export type Commande$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Restaurant
     */
    select?: Table_RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Restaurant
     */
    omit?: Table_RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_RestaurantInclude<ExtArgs> | null
    where?: Table_RestaurantWhereInput
    orderBy?: Table_RestaurantOrderByWithRelationInput | Table_RestaurantOrderByWithRelationInput[]
    cursor?: Table_RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Table_RestaurantScalarFieldEnum | Table_RestaurantScalarFieldEnum[]
  }

  /**
   * Commande.lignes
   */
  export type Commande$lignesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    where?: Ligne_CommandeWhereInput
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    cursor?: Ligne_CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ligne_CommandeScalarFieldEnum | Ligne_CommandeScalarFieldEnum[]
  }

  /**
   * Commande.paiements
   */
  export type Commande$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
  }


  /**
   * Model Ligne_Commande
   */

  export type AggregateLigne_Commande = {
    _count: Ligne_CommandeCountAggregateOutputType | null
    _avg: Ligne_CommandeAvgAggregateOutputType | null
    _sum: Ligne_CommandeSumAggregateOutputType | null
    _min: Ligne_CommandeMinAggregateOutputType | null
    _max: Ligne_CommandeMaxAggregateOutputType | null
  }

  export type Ligne_CommandeAvgAggregateOutputType = {
    id_ligne: number | null
    quantite: number | null
    prix_moment: Decimal | null
    id_commande: number | null
    id_plat: number | null
  }

  export type Ligne_CommandeSumAggregateOutputType = {
    id_ligne: number | null
    quantite: number | null
    prix_moment: Decimal | null
    id_commande: number | null
    id_plat: number | null
  }

  export type Ligne_CommandeMinAggregateOutputType = {
    id_ligne: number | null
    quantite: number | null
    prix_moment: Decimal | null
    note_cuisson: string | null
    id_commande: number | null
    id_plat: number | null
  }

  export type Ligne_CommandeMaxAggregateOutputType = {
    id_ligne: number | null
    quantite: number | null
    prix_moment: Decimal | null
    note_cuisson: string | null
    id_commande: number | null
    id_plat: number | null
  }

  export type Ligne_CommandeCountAggregateOutputType = {
    id_ligne: number
    quantite: number
    prix_moment: number
    note_cuisson: number
    id_commande: number
    id_plat: number
    _all: number
  }


  export type Ligne_CommandeAvgAggregateInputType = {
    id_ligne?: true
    quantite?: true
    prix_moment?: true
    id_commande?: true
    id_plat?: true
  }

  export type Ligne_CommandeSumAggregateInputType = {
    id_ligne?: true
    quantite?: true
    prix_moment?: true
    id_commande?: true
    id_plat?: true
  }

  export type Ligne_CommandeMinAggregateInputType = {
    id_ligne?: true
    quantite?: true
    prix_moment?: true
    note_cuisson?: true
    id_commande?: true
    id_plat?: true
  }

  export type Ligne_CommandeMaxAggregateInputType = {
    id_ligne?: true
    quantite?: true
    prix_moment?: true
    note_cuisson?: true
    id_commande?: true
    id_plat?: true
  }

  export type Ligne_CommandeCountAggregateInputType = {
    id_ligne?: true
    quantite?: true
    prix_moment?: true
    note_cuisson?: true
    id_commande?: true
    id_plat?: true
    _all?: true
  }

  export type Ligne_CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ligne_Commande to aggregate.
     */
    where?: Ligne_CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ligne_Commandes to fetch.
     */
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ligne_CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ligne_Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ligne_Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ligne_Commandes
    **/
    _count?: true | Ligne_CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ligne_CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ligne_CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ligne_CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ligne_CommandeMaxAggregateInputType
  }

  export type GetLigne_CommandeAggregateType<T extends Ligne_CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateLigne_Commande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLigne_Commande[P]>
      : GetScalarType<T[P], AggregateLigne_Commande[P]>
  }




  export type Ligne_CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ligne_CommandeWhereInput
    orderBy?: Ligne_CommandeOrderByWithAggregationInput | Ligne_CommandeOrderByWithAggregationInput[]
    by: Ligne_CommandeScalarFieldEnum[] | Ligne_CommandeScalarFieldEnum
    having?: Ligne_CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ligne_CommandeCountAggregateInputType | true
    _avg?: Ligne_CommandeAvgAggregateInputType
    _sum?: Ligne_CommandeSumAggregateInputType
    _min?: Ligne_CommandeMinAggregateInputType
    _max?: Ligne_CommandeMaxAggregateInputType
  }

  export type Ligne_CommandeGroupByOutputType = {
    id_ligne: number
    quantite: number
    prix_moment: Decimal
    note_cuisson: string | null
    id_commande: number
    id_plat: number
    _count: Ligne_CommandeCountAggregateOutputType | null
    _avg: Ligne_CommandeAvgAggregateOutputType | null
    _sum: Ligne_CommandeSumAggregateOutputType | null
    _min: Ligne_CommandeMinAggregateOutputType | null
    _max: Ligne_CommandeMaxAggregateOutputType | null
  }

  type GetLigne_CommandeGroupByPayload<T extends Ligne_CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ligne_CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ligne_CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ligne_CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], Ligne_CommandeGroupByOutputType[P]>
        }
      >
    >


  export type Ligne_CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ligne?: boolean
    quantite?: boolean
    prix_moment?: boolean
    note_cuisson?: boolean
    id_commande?: boolean
    id_plat?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligne_Commande"]>

  export type Ligne_CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ligne?: boolean
    quantite?: boolean
    prix_moment?: boolean
    note_cuisson?: boolean
    id_commande?: boolean
    id_plat?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligne_Commande"]>

  export type Ligne_CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ligne?: boolean
    quantite?: boolean
    prix_moment?: boolean
    note_cuisson?: boolean
    id_commande?: boolean
    id_plat?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligne_Commande"]>

  export type Ligne_CommandeSelectScalar = {
    id_ligne?: boolean
    quantite?: boolean
    prix_moment?: boolean
    note_cuisson?: boolean
    id_commande?: boolean
    id_plat?: boolean
  }

  export type Ligne_CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ligne" | "quantite" | "prix_moment" | "note_cuisson" | "id_commande" | "id_plat", ExtArgs["result"]["ligne_Commande"]>
  export type Ligne_CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }
  export type Ligne_CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }
  export type Ligne_CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    plat?: boolean | PlatDefaultArgs<ExtArgs>
  }

  export type $Ligne_CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ligne_Commande"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
      plat: Prisma.$PlatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ligne: number
      quantite: number
      prix_moment: Prisma.Decimal
      note_cuisson: string | null
      id_commande: number
      id_plat: number
    }, ExtArgs["result"]["ligne_Commande"]>
    composites: {}
  }

  type Ligne_CommandeGetPayload<S extends boolean | null | undefined | Ligne_CommandeDefaultArgs> = $Result.GetResult<Prisma.$Ligne_CommandePayload, S>

  type Ligne_CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Ligne_CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ligne_CommandeCountAggregateInputType | true
    }

  export interface Ligne_CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ligne_Commande'], meta: { name: 'Ligne_Commande' } }
    /**
     * Find zero or one Ligne_Commande that matches the filter.
     * @param {Ligne_CommandeFindUniqueArgs} args - Arguments to find a Ligne_Commande
     * @example
     * // Get one Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ligne_CommandeFindUniqueArgs>(args: SelectSubset<T, Ligne_CommandeFindUniqueArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ligne_Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Ligne_CommandeFindUniqueOrThrowArgs} args - Arguments to find a Ligne_Commande
     * @example
     * // Get one Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ligne_CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, Ligne_CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ligne_Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeFindFirstArgs} args - Arguments to find a Ligne_Commande
     * @example
     * // Get one Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ligne_CommandeFindFirstArgs>(args?: SelectSubset<T, Ligne_CommandeFindFirstArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ligne_Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeFindFirstOrThrowArgs} args - Arguments to find a Ligne_Commande
     * @example
     * // Get one Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ligne_CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, Ligne_CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ligne_Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ligne_Commandes
     * const ligne_Commandes = await prisma.ligne_Commande.findMany()
     * 
     * // Get first 10 Ligne_Commandes
     * const ligne_Commandes = await prisma.ligne_Commande.findMany({ take: 10 })
     * 
     * // Only select the `id_ligne`
     * const ligne_CommandeWithId_ligneOnly = await prisma.ligne_Commande.findMany({ select: { id_ligne: true } })
     * 
     */
    findMany<T extends Ligne_CommandeFindManyArgs>(args?: SelectSubset<T, Ligne_CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ligne_Commande.
     * @param {Ligne_CommandeCreateArgs} args - Arguments to create a Ligne_Commande.
     * @example
     * // Create one Ligne_Commande
     * const Ligne_Commande = await prisma.ligne_Commande.create({
     *   data: {
     *     // ... data to create a Ligne_Commande
     *   }
     * })
     * 
     */
    create<T extends Ligne_CommandeCreateArgs>(args: SelectSubset<T, Ligne_CommandeCreateArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ligne_Commandes.
     * @param {Ligne_CommandeCreateManyArgs} args - Arguments to create many Ligne_Commandes.
     * @example
     * // Create many Ligne_Commandes
     * const ligne_Commande = await prisma.ligne_Commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ligne_CommandeCreateManyArgs>(args?: SelectSubset<T, Ligne_CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ligne_Commandes and returns the data saved in the database.
     * @param {Ligne_CommandeCreateManyAndReturnArgs} args - Arguments to create many Ligne_Commandes.
     * @example
     * // Create many Ligne_Commandes
     * const ligne_Commande = await prisma.ligne_Commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ligne_Commandes and only return the `id_ligne`
     * const ligne_CommandeWithId_ligneOnly = await prisma.ligne_Commande.createManyAndReturn({
     *   select: { id_ligne: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Ligne_CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, Ligne_CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ligne_Commande.
     * @param {Ligne_CommandeDeleteArgs} args - Arguments to delete one Ligne_Commande.
     * @example
     * // Delete one Ligne_Commande
     * const Ligne_Commande = await prisma.ligne_Commande.delete({
     *   where: {
     *     // ... filter to delete one Ligne_Commande
     *   }
     * })
     * 
     */
    delete<T extends Ligne_CommandeDeleteArgs>(args: SelectSubset<T, Ligne_CommandeDeleteArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ligne_Commande.
     * @param {Ligne_CommandeUpdateArgs} args - Arguments to update one Ligne_Commande.
     * @example
     * // Update one Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ligne_CommandeUpdateArgs>(args: SelectSubset<T, Ligne_CommandeUpdateArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ligne_Commandes.
     * @param {Ligne_CommandeDeleteManyArgs} args - Arguments to filter Ligne_Commandes to delete.
     * @example
     * // Delete a few Ligne_Commandes
     * const { count } = await prisma.ligne_Commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ligne_CommandeDeleteManyArgs>(args?: SelectSubset<T, Ligne_CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ligne_Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ligne_Commandes
     * const ligne_Commande = await prisma.ligne_Commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ligne_CommandeUpdateManyArgs>(args: SelectSubset<T, Ligne_CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ligne_Commandes and returns the data updated in the database.
     * @param {Ligne_CommandeUpdateManyAndReturnArgs} args - Arguments to update many Ligne_Commandes.
     * @example
     * // Update many Ligne_Commandes
     * const ligne_Commande = await prisma.ligne_Commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ligne_Commandes and only return the `id_ligne`
     * const ligne_CommandeWithId_ligneOnly = await prisma.ligne_Commande.updateManyAndReturn({
     *   select: { id_ligne: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Ligne_CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, Ligne_CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ligne_Commande.
     * @param {Ligne_CommandeUpsertArgs} args - Arguments to update or create a Ligne_Commande.
     * @example
     * // Update or create a Ligne_Commande
     * const ligne_Commande = await prisma.ligne_Commande.upsert({
     *   create: {
     *     // ... data to create a Ligne_Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ligne_Commande we want to update
     *   }
     * })
     */
    upsert<T extends Ligne_CommandeUpsertArgs>(args: SelectSubset<T, Ligne_CommandeUpsertArgs<ExtArgs>>): Prisma__Ligne_CommandeClient<$Result.GetResult<Prisma.$Ligne_CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ligne_Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeCountArgs} args - Arguments to filter Ligne_Commandes to count.
     * @example
     * // Count the number of Ligne_Commandes
     * const count = await prisma.ligne_Commande.count({
     *   where: {
     *     // ... the filter for the Ligne_Commandes we want to count
     *   }
     * })
    **/
    count<T extends Ligne_CommandeCountArgs>(
      args?: Subset<T, Ligne_CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ligne_CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ligne_Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ligne_CommandeAggregateArgs>(args: Subset<T, Ligne_CommandeAggregateArgs>): Prisma.PrismaPromise<GetLigne_CommandeAggregateType<T>>

    /**
     * Group by Ligne_Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ligne_CommandeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ligne_CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ligne_CommandeGroupByArgs['orderBy'] }
        : { orderBy?: Ligne_CommandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ligne_CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLigne_CommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ligne_Commande model
   */
  readonly fields: Ligne_CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ligne_Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ligne_CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plat<T extends PlatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatDefaultArgs<ExtArgs>>): Prisma__PlatClient<$Result.GetResult<Prisma.$PlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ligne_Commande model
   */
  interface Ligne_CommandeFieldRefs {
    readonly id_ligne: FieldRef<"Ligne_Commande", 'Int'>
    readonly quantite: FieldRef<"Ligne_Commande", 'Int'>
    readonly prix_moment: FieldRef<"Ligne_Commande", 'Decimal'>
    readonly note_cuisson: FieldRef<"Ligne_Commande", 'String'>
    readonly id_commande: FieldRef<"Ligne_Commande", 'Int'>
    readonly id_plat: FieldRef<"Ligne_Commande", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ligne_Commande findUnique
   */
  export type Ligne_CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Ligne_Commande to fetch.
     */
    where: Ligne_CommandeWhereUniqueInput
  }

  /**
   * Ligne_Commande findUniqueOrThrow
   */
  export type Ligne_CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Ligne_Commande to fetch.
     */
    where: Ligne_CommandeWhereUniqueInput
  }

  /**
   * Ligne_Commande findFirst
   */
  export type Ligne_CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Ligne_Commande to fetch.
     */
    where?: Ligne_CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ligne_Commandes to fetch.
     */
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ligne_Commandes.
     */
    cursor?: Ligne_CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ligne_Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ligne_Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ligne_Commandes.
     */
    distinct?: Ligne_CommandeScalarFieldEnum | Ligne_CommandeScalarFieldEnum[]
  }

  /**
   * Ligne_Commande findFirstOrThrow
   */
  export type Ligne_CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Ligne_Commande to fetch.
     */
    where?: Ligne_CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ligne_Commandes to fetch.
     */
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ligne_Commandes.
     */
    cursor?: Ligne_CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ligne_Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ligne_Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ligne_Commandes.
     */
    distinct?: Ligne_CommandeScalarFieldEnum | Ligne_CommandeScalarFieldEnum[]
  }

  /**
   * Ligne_Commande findMany
   */
  export type Ligne_CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Ligne_Commandes to fetch.
     */
    where?: Ligne_CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ligne_Commandes to fetch.
     */
    orderBy?: Ligne_CommandeOrderByWithRelationInput | Ligne_CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ligne_Commandes.
     */
    cursor?: Ligne_CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ligne_Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ligne_Commandes.
     */
    skip?: number
    distinct?: Ligne_CommandeScalarFieldEnum | Ligne_CommandeScalarFieldEnum[]
  }

  /**
   * Ligne_Commande create
   */
  export type Ligne_CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Ligne_Commande.
     */
    data: XOR<Ligne_CommandeCreateInput, Ligne_CommandeUncheckedCreateInput>
  }

  /**
   * Ligne_Commande createMany
   */
  export type Ligne_CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ligne_Commandes.
     */
    data: Ligne_CommandeCreateManyInput | Ligne_CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ligne_Commande createManyAndReturn
   */
  export type Ligne_CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Ligne_Commandes.
     */
    data: Ligne_CommandeCreateManyInput | Ligne_CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ligne_Commande update
   */
  export type Ligne_CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Ligne_Commande.
     */
    data: XOR<Ligne_CommandeUpdateInput, Ligne_CommandeUncheckedUpdateInput>
    /**
     * Choose, which Ligne_Commande to update.
     */
    where: Ligne_CommandeWhereUniqueInput
  }

  /**
   * Ligne_Commande updateMany
   */
  export type Ligne_CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ligne_Commandes.
     */
    data: XOR<Ligne_CommandeUpdateManyMutationInput, Ligne_CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Ligne_Commandes to update
     */
    where?: Ligne_CommandeWhereInput
    /**
     * Limit how many Ligne_Commandes to update.
     */
    limit?: number
  }

  /**
   * Ligne_Commande updateManyAndReturn
   */
  export type Ligne_CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Ligne_Commandes.
     */
    data: XOR<Ligne_CommandeUpdateManyMutationInput, Ligne_CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Ligne_Commandes to update
     */
    where?: Ligne_CommandeWhereInput
    /**
     * Limit how many Ligne_Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ligne_Commande upsert
   */
  export type Ligne_CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Ligne_Commande to update in case it exists.
     */
    where: Ligne_CommandeWhereUniqueInput
    /**
     * In case the Ligne_Commande found by the `where` argument doesn't exist, create a new Ligne_Commande with this data.
     */
    create: XOR<Ligne_CommandeCreateInput, Ligne_CommandeUncheckedCreateInput>
    /**
     * In case the Ligne_Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ligne_CommandeUpdateInput, Ligne_CommandeUncheckedUpdateInput>
  }

  /**
   * Ligne_Commande delete
   */
  export type Ligne_CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
    /**
     * Filter which Ligne_Commande to delete.
     */
    where: Ligne_CommandeWhereUniqueInput
  }

  /**
   * Ligne_Commande deleteMany
   */
  export type Ligne_CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ligne_Commandes to delete
     */
    where?: Ligne_CommandeWhereInput
    /**
     * Limit how many Ligne_Commandes to delete.
     */
    limit?: number
  }

  /**
   * Ligne_Commande without action
   */
  export type Ligne_CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ligne_Commande
     */
    select?: Ligne_CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ligne_Commande
     */
    omit?: Ligne_CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ligne_CommandeInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    id_paiement: number | null
    montant: Decimal | null
    id_commande: number | null
  }

  export type PaiementSumAggregateOutputType = {
    id_paiement: number | null
    montant: Decimal | null
    id_commande: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id_paiement: number | null
    date_paiement: Date | null
    montant: Decimal | null
    methode: string | null
    id_commande: number | null
  }

  export type PaiementMaxAggregateOutputType = {
    id_paiement: number | null
    date_paiement: Date | null
    montant: Decimal | null
    methode: string | null
    id_commande: number | null
  }

  export type PaiementCountAggregateOutputType = {
    id_paiement: number
    date_paiement: number
    montant: number
    methode: number
    id_commande: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    id_paiement?: true
    montant?: true
    id_commande?: true
  }

  export type PaiementSumAggregateInputType = {
    id_paiement?: true
    montant?: true
    id_commande?: true
  }

  export type PaiementMinAggregateInputType = {
    id_paiement?: true
    date_paiement?: true
    montant?: true
    methode?: true
    id_commande?: true
  }

  export type PaiementMaxAggregateInputType = {
    id_paiement?: true
    date_paiement?: true
    montant?: true
    methode?: true
    id_commande?: true
  }

  export type PaiementCountAggregateInputType = {
    id_paiement?: true
    date_paiement?: true
    montant?: true
    methode?: true
    id_commande?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id_paiement: number
    date_paiement: Date
    montant: Decimal
    methode: string
    id_commande: number
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paiement?: boolean
    date_paiement?: boolean
    montant?: boolean
    methode?: boolean
    id_commande?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paiement?: boolean
    date_paiement?: boolean
    montant?: boolean
    methode?: boolean
    id_commande?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paiement?: boolean
    date_paiement?: boolean
    montant?: boolean
    methode?: boolean
    id_commande?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    id_paiement?: boolean
    date_paiement?: boolean
    montant?: boolean
    methode?: boolean
    id_commande?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_paiement" | "date_paiement" | "montant" | "methode" | "id_commande", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_paiement: number
      date_paiement: Date
      montant: Prisma.Decimal
      methode: string
      id_commande: number
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id_paiement`
     * const paiementWithId_paiementOnly = await prisma.paiement.findMany({ select: { id_paiement: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiements and returns the data saved in the database.
     * @param {PaiementCreateManyAndReturnArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiements and only return the `id_paiement`
     * const paiementWithId_paiementOnly = await prisma.paiement.createManyAndReturn({
     *   select: { id_paiement: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements and returns the data updated in the database.
     * @param {PaiementUpdateManyAndReturnArgs} args - Arguments to update many Paiements.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiements and only return the `id_paiement`
     * const paiementWithId_paiementOnly = await prisma.paiement.updateManyAndReturn({
     *   select: { id_paiement: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id_paiement: FieldRef<"Paiement", 'Int'>
    readonly date_paiement: FieldRef<"Paiement", 'DateTime'>
    readonly montant: FieldRef<"Paiement", 'Decimal'>
    readonly methode: FieldRef<"Paiement", 'String'>
    readonly id_commande: FieldRef<"Paiement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement createManyAndReturn
   */
  export type PaiementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement updateManyAndReturn
   */
  export type PaiementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id_client: 'id_client',
    nom: 'nom',
    telephone: 'telephone',
    email: 'email'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const Table_RestaurantScalarFieldEnum: {
    id_table: 'id_table',
    numero: 'numero',
    capacite: 'capacite',
    zone: 'zone'
  };

  export type Table_RestaurantScalarFieldEnum = (typeof Table_RestaurantScalarFieldEnum)[keyof typeof Table_RestaurantScalarFieldEnum]


  export const EmployeScalarFieldEnum: {
    id_employe: 'id_employe',
    nom: 'nom',
    prenom: 'prenom',
    role: 'role'
  };

  export type EmployeScalarFieldEnum = (typeof EmployeScalarFieldEnum)[keyof typeof EmployeScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id_categorie: 'id_categorie',
    libelle: 'libelle'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const PlatScalarFieldEnum: {
    id_plat: 'id_plat',
    libelle: 'libelle',
    prix_actuel: 'prix_actuel',
    disponible: 'disponible',
    id_categorie: 'id_categorie'
  };

  export type PlatScalarFieldEnum = (typeof PlatScalarFieldEnum)[keyof typeof PlatScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id_reservation: 'id_reservation',
    date_heure: 'date_heure',
    nb_personnes: 'nb_personnes',
    statut: 'statut',
    id_client: 'id_client'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id_commande: 'id_commande',
    date_creation: 'date_creation',
    type_cmd: 'type_cmd',
    statut_cuisine: 'statut_cuisine',
    id_employe: 'id_employe',
    id_client: 'id_client',
    id_reservation: 'id_reservation'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const Ligne_CommandeScalarFieldEnum: {
    id_ligne: 'id_ligne',
    quantite: 'quantite',
    prix_moment: 'prix_moment',
    note_cuisson: 'note_cuisson',
    id_commande: 'id_commande',
    id_plat: 'id_plat'
  };

  export type Ligne_CommandeScalarFieldEnum = (typeof Ligne_CommandeScalarFieldEnum)[keyof typeof Ligne_CommandeScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id_paiement: 'id_paiement',
    date_paiement: 'date_paiement',
    montant: 'montant',
    methode: 'methode',
    id_commande: 'id_commande'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id_client?: IntFilter<"Client"> | number
    nom?: StringFilter<"Client"> | string
    telephone?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    reservations?: ReservationListRelationFilter
    commandes?: CommandeListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id_client?: SortOrder
    nom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id_client?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    telephone?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    reservations?: ReservationListRelationFilter
    commandes?: CommandeListRelationFilter
  }, "id_client">

  export type ClientOrderByWithAggregationInput = {
    id_client?: SortOrder
    nom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id_client?: IntWithAggregatesFilter<"Client"> | number
    nom?: StringWithAggregatesFilter<"Client"> | string
    telephone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
  }

  export type Table_RestaurantWhereInput = {
    AND?: Table_RestaurantWhereInput | Table_RestaurantWhereInput[]
    OR?: Table_RestaurantWhereInput[]
    NOT?: Table_RestaurantWhereInput | Table_RestaurantWhereInput[]
    id_table?: IntFilter<"Table_Restaurant"> | number
    numero?: IntFilter<"Table_Restaurant"> | number
    capacite?: IntFilter<"Table_Restaurant"> | number
    zone?: StringNullableFilter<"Table_Restaurant"> | string | null
    reservations?: ReservationListRelationFilter
    commandes?: CommandeListRelationFilter
  }

  export type Table_RestaurantOrderByWithRelationInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    zone?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type Table_RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id_table?: number
    numero?: number
    AND?: Table_RestaurantWhereInput | Table_RestaurantWhereInput[]
    OR?: Table_RestaurantWhereInput[]
    NOT?: Table_RestaurantWhereInput | Table_RestaurantWhereInput[]
    capacite?: IntFilter<"Table_Restaurant"> | number
    zone?: StringNullableFilter<"Table_Restaurant"> | string | null
    reservations?: ReservationListRelationFilter
    commandes?: CommandeListRelationFilter
  }, "id_table" | "numero">

  export type Table_RestaurantOrderByWithAggregationInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    zone?: SortOrderInput | SortOrder
    _count?: Table_RestaurantCountOrderByAggregateInput
    _avg?: Table_RestaurantAvgOrderByAggregateInput
    _max?: Table_RestaurantMaxOrderByAggregateInput
    _min?: Table_RestaurantMinOrderByAggregateInput
    _sum?: Table_RestaurantSumOrderByAggregateInput
  }

  export type Table_RestaurantScalarWhereWithAggregatesInput = {
    AND?: Table_RestaurantScalarWhereWithAggregatesInput | Table_RestaurantScalarWhereWithAggregatesInput[]
    OR?: Table_RestaurantScalarWhereWithAggregatesInput[]
    NOT?: Table_RestaurantScalarWhereWithAggregatesInput | Table_RestaurantScalarWhereWithAggregatesInput[]
    id_table?: IntWithAggregatesFilter<"Table_Restaurant"> | number
    numero?: IntWithAggregatesFilter<"Table_Restaurant"> | number
    capacite?: IntWithAggregatesFilter<"Table_Restaurant"> | number
    zone?: StringNullableWithAggregatesFilter<"Table_Restaurant"> | string | null
  }

  export type EmployeWhereInput = {
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    id_employe?: IntFilter<"Employe"> | number
    nom?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    role?: StringFilter<"Employe"> | string
    commandes?: CommandeListRelationFilter
  }

  export type EmployeOrderByWithRelationInput = {
    id_employe?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type EmployeWhereUniqueInput = Prisma.AtLeast<{
    id_employe?: number
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    nom?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    role?: StringFilter<"Employe"> | string
    commandes?: CommandeListRelationFilter
  }, "id_employe">

  export type EmployeOrderByWithAggregationInput = {
    id_employe?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    _count?: EmployeCountOrderByAggregateInput
    _avg?: EmployeAvgOrderByAggregateInput
    _max?: EmployeMaxOrderByAggregateInput
    _min?: EmployeMinOrderByAggregateInput
    _sum?: EmployeSumOrderByAggregateInput
  }

  export type EmployeScalarWhereWithAggregatesInput = {
    AND?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    OR?: EmployeScalarWhereWithAggregatesInput[]
    NOT?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    id_employe?: IntWithAggregatesFilter<"Employe"> | number
    nom?: StringWithAggregatesFilter<"Employe"> | string
    prenom?: StringWithAggregatesFilter<"Employe"> | string
    role?: StringWithAggregatesFilter<"Employe"> | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id_categorie?: IntFilter<"Categorie"> | number
    libelle?: StringFilter<"Categorie"> | string
    plats?: PlatListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id_categorie?: SortOrder
    libelle?: SortOrder
    plats?: PlatOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id_categorie?: number
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    libelle?: StringFilter<"Categorie"> | string
    plats?: PlatListRelationFilter
  }, "id_categorie">

  export type CategorieOrderByWithAggregationInput = {
    id_categorie?: SortOrder
    libelle?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id_categorie?: IntWithAggregatesFilter<"Categorie"> | number
    libelle?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type PlatWhereInput = {
    AND?: PlatWhereInput | PlatWhereInput[]
    OR?: PlatWhereInput[]
    NOT?: PlatWhereInput | PlatWhereInput[]
    id_plat?: IntFilter<"Plat"> | number
    libelle?: StringFilter<"Plat"> | string
    prix_actuel?: DecimalFilter<"Plat"> | Decimal | DecimalJsLike | number | string
    disponible?: BoolFilter<"Plat"> | boolean
    id_categorie?: IntFilter<"Plat"> | number
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    lignes_cmd?: Ligne_CommandeListRelationFilter
  }

  export type PlatOrderByWithRelationInput = {
    id_plat?: SortOrder
    libelle?: SortOrder
    prix_actuel?: SortOrder
    disponible?: SortOrder
    id_categorie?: SortOrder
    categorie?: CategorieOrderByWithRelationInput
    lignes_cmd?: Ligne_CommandeOrderByRelationAggregateInput
  }

  export type PlatWhereUniqueInput = Prisma.AtLeast<{
    id_plat?: number
    AND?: PlatWhereInput | PlatWhereInput[]
    OR?: PlatWhereInput[]
    NOT?: PlatWhereInput | PlatWhereInput[]
    libelle?: StringFilter<"Plat"> | string
    prix_actuel?: DecimalFilter<"Plat"> | Decimal | DecimalJsLike | number | string
    disponible?: BoolFilter<"Plat"> | boolean
    id_categorie?: IntFilter<"Plat"> | number
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    lignes_cmd?: Ligne_CommandeListRelationFilter
  }, "id_plat">

  export type PlatOrderByWithAggregationInput = {
    id_plat?: SortOrder
    libelle?: SortOrder
    prix_actuel?: SortOrder
    disponible?: SortOrder
    id_categorie?: SortOrder
    _count?: PlatCountOrderByAggregateInput
    _avg?: PlatAvgOrderByAggregateInput
    _max?: PlatMaxOrderByAggregateInput
    _min?: PlatMinOrderByAggregateInput
    _sum?: PlatSumOrderByAggregateInput
  }

  export type PlatScalarWhereWithAggregatesInput = {
    AND?: PlatScalarWhereWithAggregatesInput | PlatScalarWhereWithAggregatesInput[]
    OR?: PlatScalarWhereWithAggregatesInput[]
    NOT?: PlatScalarWhereWithAggregatesInput | PlatScalarWhereWithAggregatesInput[]
    id_plat?: IntWithAggregatesFilter<"Plat"> | number
    libelle?: StringWithAggregatesFilter<"Plat"> | string
    prix_actuel?: DecimalWithAggregatesFilter<"Plat"> | Decimal | DecimalJsLike | number | string
    disponible?: BoolWithAggregatesFilter<"Plat"> | boolean
    id_categorie?: IntWithAggregatesFilter<"Plat"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id_reservation?: IntFilter<"Reservation"> | number
    date_heure?: DateTimeFilter<"Reservation"> | Date | string
    nb_personnes?: IntFilter<"Reservation"> | number
    statut?: StringFilter<"Reservation"> | string
    id_client?: IntFilter<"Reservation"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    tables?: Table_RestaurantListRelationFilter
    commandes?: CommandeListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id_reservation?: SortOrder
    date_heure?: SortOrder
    nb_personnes?: SortOrder
    statut?: SortOrder
    id_client?: SortOrder
    client?: ClientOrderByWithRelationInput
    tables?: Table_RestaurantOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id_reservation?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    date_heure?: DateTimeFilter<"Reservation"> | Date | string
    nb_personnes?: IntFilter<"Reservation"> | number
    statut?: StringFilter<"Reservation"> | string
    id_client?: IntFilter<"Reservation"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    tables?: Table_RestaurantListRelationFilter
    commandes?: CommandeListRelationFilter
  }, "id_reservation">

  export type ReservationOrderByWithAggregationInput = {
    id_reservation?: SortOrder
    date_heure?: SortOrder
    nb_personnes?: SortOrder
    statut?: SortOrder
    id_client?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id_reservation?: IntWithAggregatesFilter<"Reservation"> | number
    date_heure?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    nb_personnes?: IntWithAggregatesFilter<"Reservation"> | number
    statut?: StringWithAggregatesFilter<"Reservation"> | string
    id_client?: IntWithAggregatesFilter<"Reservation"> | number
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    id_commande?: IntFilter<"Commande"> | number
    date_creation?: DateTimeFilter<"Commande"> | Date | string
    type_cmd?: StringFilter<"Commande"> | string
    statut_cuisine?: StringFilter<"Commande"> | string
    id_employe?: IntFilter<"Commande"> | number
    id_client?: IntNullableFilter<"Commande"> | number | null
    id_reservation?: IntNullableFilter<"Commande"> | number | null
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
    tables?: Table_RestaurantListRelationFilter
    lignes?: Ligne_CommandeListRelationFilter
    paiements?: PaiementListRelationFilter
  }

  export type CommandeOrderByWithRelationInput = {
    id_commande?: SortOrder
    date_creation?: SortOrder
    type_cmd?: SortOrder
    statut_cuisine?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrderInput | SortOrder
    id_reservation?: SortOrderInput | SortOrder
    employe?: EmployeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    reservation?: ReservationOrderByWithRelationInput
    tables?: Table_RestaurantOrderByRelationAggregateInput
    lignes?: Ligne_CommandeOrderByRelationAggregateInput
    paiements?: PaiementOrderByRelationAggregateInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id_commande?: number
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    date_creation?: DateTimeFilter<"Commande"> | Date | string
    type_cmd?: StringFilter<"Commande"> | string
    statut_cuisine?: StringFilter<"Commande"> | string
    id_employe?: IntFilter<"Commande"> | number
    id_client?: IntNullableFilter<"Commande"> | number | null
    id_reservation?: IntNullableFilter<"Commande"> | number | null
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
    tables?: Table_RestaurantListRelationFilter
    lignes?: Ligne_CommandeListRelationFilter
    paiements?: PaiementListRelationFilter
  }, "id_commande">

  export type CommandeOrderByWithAggregationInput = {
    id_commande?: SortOrder
    date_creation?: SortOrder
    type_cmd?: SortOrder
    statut_cuisine?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrderInput | SortOrder
    id_reservation?: SortOrderInput | SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    id_commande?: IntWithAggregatesFilter<"Commande"> | number
    date_creation?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    type_cmd?: StringWithAggregatesFilter<"Commande"> | string
    statut_cuisine?: StringWithAggregatesFilter<"Commande"> | string
    id_employe?: IntWithAggregatesFilter<"Commande"> | number
    id_client?: IntNullableWithAggregatesFilter<"Commande"> | number | null
    id_reservation?: IntNullableWithAggregatesFilter<"Commande"> | number | null
  }

  export type Ligne_CommandeWhereInput = {
    AND?: Ligne_CommandeWhereInput | Ligne_CommandeWhereInput[]
    OR?: Ligne_CommandeWhereInput[]
    NOT?: Ligne_CommandeWhereInput | Ligne_CommandeWhereInput[]
    id_ligne?: IntFilter<"Ligne_Commande"> | number
    quantite?: IntFilter<"Ligne_Commande"> | number
    prix_moment?: DecimalFilter<"Ligne_Commande"> | Decimal | DecimalJsLike | number | string
    note_cuisson?: StringNullableFilter<"Ligne_Commande"> | string | null
    id_commande?: IntFilter<"Ligne_Commande"> | number
    id_plat?: IntFilter<"Ligne_Commande"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    plat?: XOR<PlatScalarRelationFilter, PlatWhereInput>
  }

  export type Ligne_CommandeOrderByWithRelationInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    note_cuisson?: SortOrderInput | SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
    commande?: CommandeOrderByWithRelationInput
    plat?: PlatOrderByWithRelationInput
  }

  export type Ligne_CommandeWhereUniqueInput = Prisma.AtLeast<{
    id_ligne?: number
    AND?: Ligne_CommandeWhereInput | Ligne_CommandeWhereInput[]
    OR?: Ligne_CommandeWhereInput[]
    NOT?: Ligne_CommandeWhereInput | Ligne_CommandeWhereInput[]
    quantite?: IntFilter<"Ligne_Commande"> | number
    prix_moment?: DecimalFilter<"Ligne_Commande"> | Decimal | DecimalJsLike | number | string
    note_cuisson?: StringNullableFilter<"Ligne_Commande"> | string | null
    id_commande?: IntFilter<"Ligne_Commande"> | number
    id_plat?: IntFilter<"Ligne_Commande"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    plat?: XOR<PlatScalarRelationFilter, PlatWhereInput>
  }, "id_ligne">

  export type Ligne_CommandeOrderByWithAggregationInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    note_cuisson?: SortOrderInput | SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
    _count?: Ligne_CommandeCountOrderByAggregateInput
    _avg?: Ligne_CommandeAvgOrderByAggregateInput
    _max?: Ligne_CommandeMaxOrderByAggregateInput
    _min?: Ligne_CommandeMinOrderByAggregateInput
    _sum?: Ligne_CommandeSumOrderByAggregateInput
  }

  export type Ligne_CommandeScalarWhereWithAggregatesInput = {
    AND?: Ligne_CommandeScalarWhereWithAggregatesInput | Ligne_CommandeScalarWhereWithAggregatesInput[]
    OR?: Ligne_CommandeScalarWhereWithAggregatesInput[]
    NOT?: Ligne_CommandeScalarWhereWithAggregatesInput | Ligne_CommandeScalarWhereWithAggregatesInput[]
    id_ligne?: IntWithAggregatesFilter<"Ligne_Commande"> | number
    quantite?: IntWithAggregatesFilter<"Ligne_Commande"> | number
    prix_moment?: DecimalWithAggregatesFilter<"Ligne_Commande"> | Decimal | DecimalJsLike | number | string
    note_cuisson?: StringNullableWithAggregatesFilter<"Ligne_Commande"> | string | null
    id_commande?: IntWithAggregatesFilter<"Ligne_Commande"> | number
    id_plat?: IntWithAggregatesFilter<"Ligne_Commande"> | number
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id_paiement?: IntFilter<"Paiement"> | number
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    methode?: StringFilter<"Paiement"> | string
    id_commande?: IntFilter<"Paiement"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    id_paiement?: SortOrder
    date_paiement?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    id_commande?: SortOrder
    commande?: CommandeOrderByWithRelationInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id_paiement?: number
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    methode?: StringFilter<"Paiement"> | string
    id_commande?: IntFilter<"Paiement"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
  }, "id_paiement">

  export type PaiementOrderByWithAggregationInput = {
    id_paiement?: SortOrder
    date_paiement?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    id_commande?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id_paiement?: IntWithAggregatesFilter<"Paiement"> | number
    date_paiement?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    montant?: DecimalWithAggregatesFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    methode?: StringWithAggregatesFilter<"Paiement"> | string
    id_commande?: IntWithAggregatesFilter<"Paiement"> | number
  }

  export type ClientCreateInput = {
    nom: string
    telephone?: string | null
    email?: string | null
    reservations?: ReservationCreateNestedManyWithoutClientInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id_client?: number
    nom: string
    telephone?: string | null
    email?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutClientNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id_client?: number
    nom: string
    telephone?: string | null
    email?: string | null
  }

  export type ClientUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Table_RestaurantCreateInput = {
    numero: number
    capacite: number
    zone?: string | null
    reservations?: ReservationCreateNestedManyWithoutTablesInput
    commandes?: CommandeCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantUncheckedCreateInput = {
    id_table?: number
    numero: number
    capacite: number
    zone?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutTablesInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutTablesNestedInput
    commandes?: CommandeUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantUncheckedUpdateInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutTablesNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantCreateManyInput = {
    id_table?: number
    numero: number
    capacite: number
    zone?: string | null
  }

  export type Table_RestaurantUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Table_RestaurantUncheckedUpdateManyInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeCreateInput = {
    nom: string
    prenom: string
    role: string
    commandes?: CommandeCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateInput = {
    id_employe?: number
    nom: string
    prenom: string
    role: string
    commandes?: CommandeUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateInput = {
    id_employe?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeCreateManyInput = {
    id_employe?: number
    nom: string
    prenom: string
    role: string
  }

  export type EmployeUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeUncheckedUpdateManyInput = {
    id_employe?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieCreateInput = {
    libelle: string
    plats?: PlatCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id_categorie?: number
    libelle: string
    plats?: PlatUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    plats?: PlatUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    plats?: PlatUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id_categorie?: number
    libelle: string
  }

  export type CategorieUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type PlatCreateInput = {
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    categorie: CategorieCreateNestedOneWithoutPlatsInput
    lignes_cmd?: Ligne_CommandeCreateNestedManyWithoutPlatInput
  }

  export type PlatUncheckedCreateInput = {
    id_plat?: number
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    id_categorie: number
    lignes_cmd?: Ligne_CommandeUncheckedCreateNestedManyWithoutPlatInput
  }

  export type PlatUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    categorie?: CategorieUpdateOneRequiredWithoutPlatsNestedInput
    lignes_cmd?: Ligne_CommandeUpdateManyWithoutPlatNestedInput
  }

  export type PlatUncheckedUpdateInput = {
    id_plat?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    id_categorie?: IntFieldUpdateOperationsInput | number
    lignes_cmd?: Ligne_CommandeUncheckedUpdateManyWithoutPlatNestedInput
  }

  export type PlatCreateManyInput = {
    id_plat?: number
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    id_categorie: number
  }

  export type PlatUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatUncheckedUpdateManyInput = {
    id_plat?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    id_categorie?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    client: ClientCreateNestedOneWithoutReservationsInput
    tables?: Table_RestaurantCreateNestedManyWithoutReservationsInput
    commandes?: CommandeCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    id_client: number
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutReservationsInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutReservationsNestedInput
    tables?: Table_RestaurantUpdateManyWithoutReservationsNestedInput
    commandes?: CommandeUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    tables?: Table_RestaurantUncheckedUpdateManyWithoutReservationsNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    id_client: number
  }

  export type ReservationUpdateManyMutationInput = {
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeCreateInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    client?: ClientCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    id_reservation?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUpdateInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    client?: ClientUpdateOneWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeCreateManyInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    id_reservation?: number | null
  }

  export type CommandeUpdateManyMutationInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeUncheckedUpdateManyInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Ligne_CommandeCreateInput = {
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    commande: CommandeCreateNestedOneWithoutLignesInput
    plat: PlatCreateNestedOneWithoutLignes_cmdInput
  }

  export type Ligne_CommandeUncheckedCreateInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_commande: number
    id_plat: number
  }

  export type Ligne_CommandeUpdateInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    commande?: CommandeUpdateOneRequiredWithoutLignesNestedInput
    plat?: PlatUpdateOneRequiredWithoutLignes_cmdNestedInput
  }

  export type Ligne_CommandeUncheckedUpdateInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_commande?: IntFieldUpdateOperationsInput | number
    id_plat?: IntFieldUpdateOperationsInput | number
  }

  export type Ligne_CommandeCreateManyInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_commande: number
    id_plat: number
  }

  export type Ligne_CommandeUpdateManyMutationInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ligne_CommandeUncheckedUpdateManyInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_commande?: IntFieldUpdateOperationsInput | number
    id_plat?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementCreateInput = {
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
    commande: CommandeCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateInput = {
    id_paiement?: number
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
    id_commande: number
  }

  export type PaiementUpdateInput = {
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
    commande?: CommandeUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id_paiement?: IntFieldUpdateOperationsInput | number
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
    id_commande?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementCreateManyInput = {
    id_paiement?: number
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
    id_commande: number
  }

  export type PaiementUpdateManyMutationInput = {
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id_paiement?: IntFieldUpdateOperationsInput | number
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
    id_commande?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id_client?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id_client?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id_client?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id_client?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id_client?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Table_RestaurantCountOrderByAggregateInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    zone?: SortOrder
  }

  export type Table_RestaurantAvgOrderByAggregateInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
  }

  export type Table_RestaurantMaxOrderByAggregateInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    zone?: SortOrder
  }

  export type Table_RestaurantMinOrderByAggregateInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    zone?: SortOrder
  }

  export type Table_RestaurantSumOrderByAggregateInput = {
    id_table?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
  }

  export type EmployeCountOrderByAggregateInput = {
    id_employe?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
  }

  export type EmployeAvgOrderByAggregateInput = {
    id_employe?: SortOrder
  }

  export type EmployeMaxOrderByAggregateInput = {
    id_employe?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
  }

  export type EmployeMinOrderByAggregateInput = {
    id_employe?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
  }

  export type EmployeSumOrderByAggregateInput = {
    id_employe?: SortOrder
  }

  export type PlatListRelationFilter = {
    every?: PlatWhereInput
    some?: PlatWhereInput
    none?: PlatWhereInput
  }

  export type PlatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieCountOrderByAggregateInput = {
    id_categorie?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id_categorie?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id_categorie?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id_categorie?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type Ligne_CommandeListRelationFilter = {
    every?: Ligne_CommandeWhereInput
    some?: Ligne_CommandeWhereInput
    none?: Ligne_CommandeWhereInput
  }

  export type Ligne_CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatCountOrderByAggregateInput = {
    id_plat?: SortOrder
    libelle?: SortOrder
    prix_actuel?: SortOrder
    disponible?: SortOrder
    id_categorie?: SortOrder
  }

  export type PlatAvgOrderByAggregateInput = {
    id_plat?: SortOrder
    prix_actuel?: SortOrder
    id_categorie?: SortOrder
  }

  export type PlatMaxOrderByAggregateInput = {
    id_plat?: SortOrder
    libelle?: SortOrder
    prix_actuel?: SortOrder
    disponible?: SortOrder
    id_categorie?: SortOrder
  }

  export type PlatMinOrderByAggregateInput = {
    id_plat?: SortOrder
    libelle?: SortOrder
    prix_actuel?: SortOrder
    disponible?: SortOrder
    id_categorie?: SortOrder
  }

  export type PlatSumOrderByAggregateInput = {
    id_plat?: SortOrder
    prix_actuel?: SortOrder
    id_categorie?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type Table_RestaurantListRelationFilter = {
    every?: Table_RestaurantWhereInput
    some?: Table_RestaurantWhereInput
    none?: Table_RestaurantWhereInput
  }

  export type Table_RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id_reservation?: SortOrder
    date_heure?: SortOrder
    nb_personnes?: SortOrder
    statut?: SortOrder
    id_client?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id_reservation?: SortOrder
    nb_personnes?: SortOrder
    id_client?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id_reservation?: SortOrder
    date_heure?: SortOrder
    nb_personnes?: SortOrder
    statut?: SortOrder
    id_client?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id_reservation?: SortOrder
    date_heure?: SortOrder
    nb_personnes?: SortOrder
    statut?: SortOrder
    id_client?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id_reservation?: SortOrder
    nb_personnes?: SortOrder
    id_client?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeScalarRelationFilter = {
    is?: EmployeWhereInput
    isNot?: EmployeWhereInput
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ReservationNullableScalarRelationFilter = {
    is?: ReservationWhereInput | null
    isNot?: ReservationWhereInput | null
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeCountOrderByAggregateInput = {
    id_commande?: SortOrder
    date_creation?: SortOrder
    type_cmd?: SortOrder
    statut_cuisine?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrder
    id_reservation?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    id_commande?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrder
    id_reservation?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id_commande?: SortOrder
    date_creation?: SortOrder
    type_cmd?: SortOrder
    statut_cuisine?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrder
    id_reservation?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id_commande?: SortOrder
    date_creation?: SortOrder
    type_cmd?: SortOrder
    statut_cuisine?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrder
    id_reservation?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    id_commande?: SortOrder
    id_employe?: SortOrder
    id_client?: SortOrder
    id_reservation?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandeScalarRelationFilter = {
    is?: CommandeWhereInput
    isNot?: CommandeWhereInput
  }

  export type PlatScalarRelationFilter = {
    is?: PlatWhereInput
    isNot?: PlatWhereInput
  }

  export type Ligne_CommandeCountOrderByAggregateInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    note_cuisson?: SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
  }

  export type Ligne_CommandeAvgOrderByAggregateInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
  }

  export type Ligne_CommandeMaxOrderByAggregateInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    note_cuisson?: SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
  }

  export type Ligne_CommandeMinOrderByAggregateInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    note_cuisson?: SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
  }

  export type Ligne_CommandeSumOrderByAggregateInput = {
    id_ligne?: SortOrder
    quantite?: SortOrder
    prix_moment?: SortOrder
    id_commande?: SortOrder
    id_plat?: SortOrder
  }

  export type PaiementCountOrderByAggregateInput = {
    id_paiement?: SortOrder
    date_paiement?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    id_commande?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    id_paiement?: SortOrder
    montant?: SortOrder
    id_commande?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id_paiement?: SortOrder
    date_paiement?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    id_commande?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id_paiement?: SortOrder
    date_paiement?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    id_commande?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    id_paiement?: SortOrder
    montant?: SortOrder
    id_commande?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutClientInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReservationUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClientInput | ReservationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClientInput | ReservationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClientInput | ReservationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput> | ReservationCreateWithoutClientInput[] | ReservationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutClientInput | ReservationCreateOrConnectWithoutClientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutClientInput | ReservationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReservationCreateManyClientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutClientInput | ReservationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutClientInput | ReservationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutTablesInput = {
    create?: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput> | ReservationCreateWithoutTablesInput[] | ReservationUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTablesInput | ReservationCreateOrConnectWithoutTablesInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutTablesInput = {
    create?: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput> | CommandeCreateWithoutTablesInput[] | CommandeUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutTablesInput | CommandeCreateOrConnectWithoutTablesInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput> | ReservationCreateWithoutTablesInput[] | ReservationUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTablesInput | ReservationCreateOrConnectWithoutTablesInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput> | CommandeCreateWithoutTablesInput[] | CommandeUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutTablesInput | CommandeCreateOrConnectWithoutTablesInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutTablesNestedInput = {
    create?: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput> | ReservationCreateWithoutTablesInput[] | ReservationUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTablesInput | ReservationCreateOrConnectWithoutTablesInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTablesInput | ReservationUpsertWithWhereUniqueWithoutTablesInput[]
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTablesInput | ReservationUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTablesInput | ReservationUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutTablesNestedInput = {
    create?: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput> | CommandeCreateWithoutTablesInput[] | CommandeUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutTablesInput | CommandeCreateOrConnectWithoutTablesInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutTablesInput | CommandeUpsertWithWhereUniqueWithoutTablesInput[]
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutTablesInput | CommandeUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutTablesInput | CommandeUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput> | ReservationCreateWithoutTablesInput[] | ReservationUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTablesInput | ReservationCreateOrConnectWithoutTablesInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTablesInput | ReservationUpsertWithWhereUniqueWithoutTablesInput[]
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTablesInput | ReservationUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTablesInput | ReservationUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput> | CommandeCreateWithoutTablesInput[] | CommandeUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutTablesInput | CommandeCreateOrConnectWithoutTablesInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutTablesInput | CommandeUpsertWithWhereUniqueWithoutTablesInput[]
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutTablesInput | CommandeUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutTablesInput | CommandeUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type CommandeCreateNestedManyWithoutEmployeInput = {
    create?: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput> | CommandeCreateWithoutEmployeInput[] | CommandeUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutEmployeInput | CommandeCreateOrConnectWithoutEmployeInput[]
    createMany?: CommandeCreateManyEmployeInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput> | CommandeCreateWithoutEmployeInput[] | CommandeUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutEmployeInput | CommandeCreateOrConnectWithoutEmployeInput[]
    createMany?: CommandeCreateManyEmployeInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type CommandeUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput> | CommandeCreateWithoutEmployeInput[] | CommandeUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutEmployeInput | CommandeCreateOrConnectWithoutEmployeInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutEmployeInput | CommandeUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: CommandeCreateManyEmployeInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutEmployeInput | CommandeUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutEmployeInput | CommandeUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput> | CommandeCreateWithoutEmployeInput[] | CommandeUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutEmployeInput | CommandeCreateOrConnectWithoutEmployeInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutEmployeInput | CommandeUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: CommandeCreateManyEmployeInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutEmployeInput | CommandeUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutEmployeInput | CommandeUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type PlatCreateNestedManyWithoutCategorieInput = {
    create?: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput> | PlatCreateWithoutCategorieInput[] | PlatUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlatCreateOrConnectWithoutCategorieInput | PlatCreateOrConnectWithoutCategorieInput[]
    createMany?: PlatCreateManyCategorieInputEnvelope
    connect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
  }

  export type PlatUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput> | PlatCreateWithoutCategorieInput[] | PlatUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlatCreateOrConnectWithoutCategorieInput | PlatCreateOrConnectWithoutCategorieInput[]
    createMany?: PlatCreateManyCategorieInputEnvelope
    connect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
  }

  export type PlatUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput> | PlatCreateWithoutCategorieInput[] | PlatUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlatCreateOrConnectWithoutCategorieInput | PlatCreateOrConnectWithoutCategorieInput[]
    upsert?: PlatUpsertWithWhereUniqueWithoutCategorieInput | PlatUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: PlatCreateManyCategorieInputEnvelope
    set?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    disconnect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    delete?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    connect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    update?: PlatUpdateWithWhereUniqueWithoutCategorieInput | PlatUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: PlatUpdateManyWithWhereWithoutCategorieInput | PlatUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: PlatScalarWhereInput | PlatScalarWhereInput[]
  }

  export type PlatUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput> | PlatCreateWithoutCategorieInput[] | PlatUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlatCreateOrConnectWithoutCategorieInput | PlatCreateOrConnectWithoutCategorieInput[]
    upsert?: PlatUpsertWithWhereUniqueWithoutCategorieInput | PlatUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: PlatCreateManyCategorieInputEnvelope
    set?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    disconnect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    delete?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    connect?: PlatWhereUniqueInput | PlatWhereUniqueInput[]
    update?: PlatUpdateWithWhereUniqueWithoutCategorieInput | PlatUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: PlatUpdateManyWithWhereWithoutCategorieInput | PlatUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: PlatScalarWhereInput | PlatScalarWhereInput[]
  }

  export type CategorieCreateNestedOneWithoutPlatsInput = {
    create?: XOR<CategorieCreateWithoutPlatsInput, CategorieUncheckedCreateWithoutPlatsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutPlatsInput
    connect?: CategorieWhereUniqueInput
  }

  export type Ligne_CommandeCreateNestedManyWithoutPlatInput = {
    create?: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput> | Ligne_CommandeCreateWithoutPlatInput[] | Ligne_CommandeUncheckedCreateWithoutPlatInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutPlatInput | Ligne_CommandeCreateOrConnectWithoutPlatInput[]
    createMany?: Ligne_CommandeCreateManyPlatInputEnvelope
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
  }

  export type Ligne_CommandeUncheckedCreateNestedManyWithoutPlatInput = {
    create?: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput> | Ligne_CommandeCreateWithoutPlatInput[] | Ligne_CommandeUncheckedCreateWithoutPlatInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutPlatInput | Ligne_CommandeCreateOrConnectWithoutPlatInput[]
    createMany?: Ligne_CommandeCreateManyPlatInputEnvelope
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategorieUpdateOneRequiredWithoutPlatsNestedInput = {
    create?: XOR<CategorieCreateWithoutPlatsInput, CategorieUncheckedCreateWithoutPlatsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutPlatsInput
    upsert?: CategorieUpsertWithoutPlatsInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutPlatsInput, CategorieUpdateWithoutPlatsInput>, CategorieUncheckedUpdateWithoutPlatsInput>
  }

  export type Ligne_CommandeUpdateManyWithoutPlatNestedInput = {
    create?: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput> | Ligne_CommandeCreateWithoutPlatInput[] | Ligne_CommandeUncheckedCreateWithoutPlatInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutPlatInput | Ligne_CommandeCreateOrConnectWithoutPlatInput[]
    upsert?: Ligne_CommandeUpsertWithWhereUniqueWithoutPlatInput | Ligne_CommandeUpsertWithWhereUniqueWithoutPlatInput[]
    createMany?: Ligne_CommandeCreateManyPlatInputEnvelope
    set?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    disconnect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    delete?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    update?: Ligne_CommandeUpdateWithWhereUniqueWithoutPlatInput | Ligne_CommandeUpdateWithWhereUniqueWithoutPlatInput[]
    updateMany?: Ligne_CommandeUpdateManyWithWhereWithoutPlatInput | Ligne_CommandeUpdateManyWithWhereWithoutPlatInput[]
    deleteMany?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
  }

  export type Ligne_CommandeUncheckedUpdateManyWithoutPlatNestedInput = {
    create?: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput> | Ligne_CommandeCreateWithoutPlatInput[] | Ligne_CommandeUncheckedCreateWithoutPlatInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutPlatInput | Ligne_CommandeCreateOrConnectWithoutPlatInput[]
    upsert?: Ligne_CommandeUpsertWithWhereUniqueWithoutPlatInput | Ligne_CommandeUpsertWithWhereUniqueWithoutPlatInput[]
    createMany?: Ligne_CommandeCreateManyPlatInputEnvelope
    set?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    disconnect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    delete?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    update?: Ligne_CommandeUpdateWithWhereUniqueWithoutPlatInput | Ligne_CommandeUpdateWithWhereUniqueWithoutPlatInput[]
    updateMany?: Ligne_CommandeUpdateManyWithWhereWithoutPlatInput | Ligne_CommandeUpdateManyWithWhereWithoutPlatInput[]
    deleteMany?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ClientCreateWithoutReservationsInput, ClientUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReservationsInput
    connect?: ClientWhereUniqueInput
  }

  export type Table_RestaurantCreateNestedManyWithoutReservationsInput = {
    create?: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput> | Table_RestaurantCreateWithoutReservationsInput[] | Table_RestaurantUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutReservationsInput | Table_RestaurantCreateOrConnectWithoutReservationsInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutReservationInput = {
    create?: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput> | CommandeCreateWithoutReservationInput[] | CommandeUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutReservationInput | CommandeCreateOrConnectWithoutReservationInput[]
    createMany?: CommandeCreateManyReservationInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type Table_RestaurantUncheckedCreateNestedManyWithoutReservationsInput = {
    create?: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput> | Table_RestaurantCreateWithoutReservationsInput[] | Table_RestaurantUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutReservationsInput | Table_RestaurantCreateOrConnectWithoutReservationsInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput> | CommandeCreateWithoutReservationInput[] | CommandeUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutReservationInput | CommandeCreateOrConnectWithoutReservationInput[]
    createMany?: CommandeCreateManyReservationInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ClientCreateWithoutReservationsInput, ClientUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReservationsInput
    upsert?: ClientUpsertWithoutReservationsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutReservationsInput, ClientUpdateWithoutReservationsInput>, ClientUncheckedUpdateWithoutReservationsInput>
  }

  export type Table_RestaurantUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput> | Table_RestaurantCreateWithoutReservationsInput[] | Table_RestaurantUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutReservationsInput | Table_RestaurantCreateOrConnectWithoutReservationsInput[]
    upsert?: Table_RestaurantUpsertWithWhereUniqueWithoutReservationsInput | Table_RestaurantUpsertWithWhereUniqueWithoutReservationsInput[]
    set?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    disconnect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    delete?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    update?: Table_RestaurantUpdateWithWhereUniqueWithoutReservationsInput | Table_RestaurantUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: Table_RestaurantUpdateManyWithWhereWithoutReservationsInput | Table_RestaurantUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutReservationNestedInput = {
    create?: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput> | CommandeCreateWithoutReservationInput[] | CommandeUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutReservationInput | CommandeCreateOrConnectWithoutReservationInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutReservationInput | CommandeUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: CommandeCreateManyReservationInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutReservationInput | CommandeUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutReservationInput | CommandeUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type Table_RestaurantUncheckedUpdateManyWithoutReservationsNestedInput = {
    create?: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput> | Table_RestaurantCreateWithoutReservationsInput[] | Table_RestaurantUncheckedCreateWithoutReservationsInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutReservationsInput | Table_RestaurantCreateOrConnectWithoutReservationsInput[]
    upsert?: Table_RestaurantUpsertWithWhereUniqueWithoutReservationsInput | Table_RestaurantUpsertWithWhereUniqueWithoutReservationsInput[]
    set?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    disconnect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    delete?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    update?: Table_RestaurantUpdateWithWhereUniqueWithoutReservationsInput | Table_RestaurantUpdateWithWhereUniqueWithoutReservationsInput[]
    updateMany?: Table_RestaurantUpdateManyWithWhereWithoutReservationsInput | Table_RestaurantUpdateManyWithWhereWithoutReservationsInput[]
    deleteMany?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput> | CommandeCreateWithoutReservationInput[] | CommandeUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutReservationInput | CommandeCreateOrConnectWithoutReservationInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutReservationInput | CommandeUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: CommandeCreateManyReservationInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutReservationInput | CommandeUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutReservationInput | CommandeUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type EmployeCreateNestedOneWithoutCommandesInput = {
    create?: XOR<EmployeCreateWithoutCommandesInput, EmployeUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutCommandesInput
    connect?: EmployeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    connect?: ClientWhereUniqueInput
  }

  export type ReservationCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ReservationCreateWithoutCommandesInput, ReservationUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutCommandesInput
    connect?: ReservationWhereUniqueInput
  }

  export type Table_RestaurantCreateNestedManyWithoutCommandesInput = {
    create?: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput> | Table_RestaurantCreateWithoutCommandesInput[] | Table_RestaurantUncheckedCreateWithoutCommandesInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutCommandesInput | Table_RestaurantCreateOrConnectWithoutCommandesInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
  }

  export type Ligne_CommandeCreateNestedManyWithoutCommandeInput = {
    create?: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput> | Ligne_CommandeCreateWithoutCommandeInput[] | Ligne_CommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutCommandeInput | Ligne_CommandeCreateOrConnectWithoutCommandeInput[]
    createMany?: Ligne_CommandeCreateManyCommandeInputEnvelope
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutCommandeInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput> | PaiementCreateWithoutCommandeInput[] | PaiementUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput | PaiementCreateOrConnectWithoutCommandeInput[]
    createMany?: PaiementCreateManyCommandeInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput = {
    create?: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput> | Table_RestaurantCreateWithoutCommandesInput[] | Table_RestaurantUncheckedCreateWithoutCommandesInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutCommandesInput | Table_RestaurantCreateOrConnectWithoutCommandesInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
  }

  export type Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput> | Ligne_CommandeCreateWithoutCommandeInput[] | Ligne_CommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutCommandeInput | Ligne_CommandeCreateOrConnectWithoutCommandeInput[]
    createMany?: Ligne_CommandeCreateManyCommandeInputEnvelope
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput> | PaiementCreateWithoutCommandeInput[] | PaiementUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput | PaiementCreateOrConnectWithoutCommandeInput[]
    createMany?: PaiementCreateManyCommandeInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type EmployeUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<EmployeCreateWithoutCommandesInput, EmployeUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutCommandesInput
    upsert?: EmployeUpsertWithoutCommandesInput
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutCommandesInput, EmployeUpdateWithoutCommandesInput>, EmployeUncheckedUpdateWithoutCommandesInput>
  }

  export type ClientUpdateOneWithoutCommandesNestedInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    upsert?: ClientUpsertWithoutCommandesInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCommandesInput, ClientUpdateWithoutCommandesInput>, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type ReservationUpdateOneWithoutCommandesNestedInput = {
    create?: XOR<ReservationCreateWithoutCommandesInput, ReservationUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutCommandesInput
    upsert?: ReservationUpsertWithoutCommandesInput
    disconnect?: ReservationWhereInput | boolean
    delete?: ReservationWhereInput | boolean
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutCommandesInput, ReservationUpdateWithoutCommandesInput>, ReservationUncheckedUpdateWithoutCommandesInput>
  }

  export type Table_RestaurantUpdateManyWithoutCommandesNestedInput = {
    create?: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput> | Table_RestaurantCreateWithoutCommandesInput[] | Table_RestaurantUncheckedCreateWithoutCommandesInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutCommandesInput | Table_RestaurantCreateOrConnectWithoutCommandesInput[]
    upsert?: Table_RestaurantUpsertWithWhereUniqueWithoutCommandesInput | Table_RestaurantUpsertWithWhereUniqueWithoutCommandesInput[]
    set?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    disconnect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    delete?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    update?: Table_RestaurantUpdateWithWhereUniqueWithoutCommandesInput | Table_RestaurantUpdateWithWhereUniqueWithoutCommandesInput[]
    updateMany?: Table_RestaurantUpdateManyWithWhereWithoutCommandesInput | Table_RestaurantUpdateManyWithWhereWithoutCommandesInput[]
    deleteMany?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
  }

  export type Ligne_CommandeUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput> | Ligne_CommandeCreateWithoutCommandeInput[] | Ligne_CommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutCommandeInput | Ligne_CommandeCreateOrConnectWithoutCommandeInput[]
    upsert?: Ligne_CommandeUpsertWithWhereUniqueWithoutCommandeInput | Ligne_CommandeUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: Ligne_CommandeCreateManyCommandeInputEnvelope
    set?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    disconnect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    delete?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    update?: Ligne_CommandeUpdateWithWhereUniqueWithoutCommandeInput | Ligne_CommandeUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: Ligne_CommandeUpdateManyWithWhereWithoutCommandeInput | Ligne_CommandeUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput> | PaiementCreateWithoutCommandeInput[] | PaiementUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput | PaiementCreateOrConnectWithoutCommandeInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutCommandeInput | PaiementUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: PaiementCreateManyCommandeInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutCommandeInput | PaiementUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutCommandeInput | PaiementUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput = {
    create?: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput> | Table_RestaurantCreateWithoutCommandesInput[] | Table_RestaurantUncheckedCreateWithoutCommandesInput[]
    connectOrCreate?: Table_RestaurantCreateOrConnectWithoutCommandesInput | Table_RestaurantCreateOrConnectWithoutCommandesInput[]
    upsert?: Table_RestaurantUpsertWithWhereUniqueWithoutCommandesInput | Table_RestaurantUpsertWithWhereUniqueWithoutCommandesInput[]
    set?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    disconnect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    delete?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    connect?: Table_RestaurantWhereUniqueInput | Table_RestaurantWhereUniqueInput[]
    update?: Table_RestaurantUpdateWithWhereUniqueWithoutCommandesInput | Table_RestaurantUpdateWithWhereUniqueWithoutCommandesInput[]
    updateMany?: Table_RestaurantUpdateManyWithWhereWithoutCommandesInput | Table_RestaurantUpdateManyWithWhereWithoutCommandesInput[]
    deleteMany?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
  }

  export type Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput> | Ligne_CommandeCreateWithoutCommandeInput[] | Ligne_CommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: Ligne_CommandeCreateOrConnectWithoutCommandeInput | Ligne_CommandeCreateOrConnectWithoutCommandeInput[]
    upsert?: Ligne_CommandeUpsertWithWhereUniqueWithoutCommandeInput | Ligne_CommandeUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: Ligne_CommandeCreateManyCommandeInputEnvelope
    set?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    disconnect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    delete?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    connect?: Ligne_CommandeWhereUniqueInput | Ligne_CommandeWhereUniqueInput[]
    update?: Ligne_CommandeUpdateWithWhereUniqueWithoutCommandeInput | Ligne_CommandeUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: Ligne_CommandeUpdateManyWithWhereWithoutCommandeInput | Ligne_CommandeUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput> | PaiementCreateWithoutCommandeInput[] | PaiementUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput | PaiementCreateOrConnectWithoutCommandeInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutCommandeInput | PaiementUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: PaiementCreateManyCommandeInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutCommandeInput | PaiementUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutCommandeInput | PaiementUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type CommandeCreateNestedOneWithoutLignesInput = {
    create?: XOR<CommandeCreateWithoutLignesInput, CommandeUncheckedCreateWithoutLignesInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLignesInput
    connect?: CommandeWhereUniqueInput
  }

  export type PlatCreateNestedOneWithoutLignes_cmdInput = {
    create?: XOR<PlatCreateWithoutLignes_cmdInput, PlatUncheckedCreateWithoutLignes_cmdInput>
    connectOrCreate?: PlatCreateOrConnectWithoutLignes_cmdInput
    connect?: PlatWhereUniqueInput
  }

  export type CommandeUpdateOneRequiredWithoutLignesNestedInput = {
    create?: XOR<CommandeCreateWithoutLignesInput, CommandeUncheckedCreateWithoutLignesInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLignesInput
    upsert?: CommandeUpsertWithoutLignesInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutLignesInput, CommandeUpdateWithoutLignesInput>, CommandeUncheckedUpdateWithoutLignesInput>
  }

  export type PlatUpdateOneRequiredWithoutLignes_cmdNestedInput = {
    create?: XOR<PlatCreateWithoutLignes_cmdInput, PlatUncheckedCreateWithoutLignes_cmdInput>
    connectOrCreate?: PlatCreateOrConnectWithoutLignes_cmdInput
    upsert?: PlatUpsertWithoutLignes_cmdInput
    connect?: PlatWhereUniqueInput
    update?: XOR<XOR<PlatUpdateToOneWithWhereWithoutLignes_cmdInput, PlatUpdateWithoutLignes_cmdInput>, PlatUncheckedUpdateWithoutLignes_cmdInput>
  }

  export type CommandeCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<CommandeCreateWithoutPaiementsInput, CommandeUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPaiementsInput
    connect?: CommandeWhereUniqueInput
  }

  export type CommandeUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<CommandeCreateWithoutPaiementsInput, CommandeUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPaiementsInput
    upsert?: CommandeUpsertWithoutPaiementsInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutPaiementsInput, CommandeUpdateWithoutPaiementsInput>, CommandeUncheckedUpdateWithoutPaiementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ReservationCreateWithoutClientInput = {
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    tables?: Table_RestaurantCreateNestedManyWithoutReservationsInput
    commandes?: CommandeCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutClientInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutReservationsInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutClientInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput>
  }

  export type ReservationCreateManyClientInputEnvelope = {
    data: ReservationCreateManyClientInput | ReservationCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CommandeCreateWithoutClientInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutClientInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_reservation?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutClientInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeCreateManyClientInputEnvelope = {
    data: CommandeCreateManyClientInput | CommandeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutClientInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutClientInput, ReservationUncheckedUpdateWithoutClientInput>
    create: XOR<ReservationCreateWithoutClientInput, ReservationUncheckedCreateWithoutClientInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutClientInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutClientInput, ReservationUncheckedUpdateWithoutClientInput>
  }

  export type ReservationUpdateManyWithWhereWithoutClientInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutClientInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id_reservation?: IntFilter<"Reservation"> | number
    date_heure?: DateTimeFilter<"Reservation"> | Date | string
    nb_personnes?: IntFilter<"Reservation"> | number
    statut?: StringFilter<"Reservation"> | string
    id_client?: IntFilter<"Reservation"> | number
  }

  export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
  }

  export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutClientInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    id_commande?: IntFilter<"Commande"> | number
    date_creation?: DateTimeFilter<"Commande"> | Date | string
    type_cmd?: StringFilter<"Commande"> | string
    statut_cuisine?: StringFilter<"Commande"> | string
    id_employe?: IntFilter<"Commande"> | number
    id_client?: IntNullableFilter<"Commande"> | number | null
    id_reservation?: IntNullableFilter<"Commande"> | number | null
  }

  export type ReservationCreateWithoutTablesInput = {
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    client: ClientCreateNestedOneWithoutReservationsInput
    commandes?: CommandeCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutTablesInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    id_client: number
    commandes?: CommandeUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutTablesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput>
  }

  export type CommandeCreateWithoutTablesInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    client?: ClientCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutTablesInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    id_reservation?: number | null
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutTablesInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutTablesInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTablesInput, ReservationUncheckedUpdateWithoutTablesInput>
    create: XOR<ReservationCreateWithoutTablesInput, ReservationUncheckedCreateWithoutTablesInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTablesInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTablesInput, ReservationUncheckedUpdateWithoutTablesInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTablesInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTablesInput>
  }

  export type CommandeUpsertWithWhereUniqueWithoutTablesInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutTablesInput, CommandeUncheckedUpdateWithoutTablesInput>
    create: XOR<CommandeCreateWithoutTablesInput, CommandeUncheckedCreateWithoutTablesInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutTablesInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutTablesInput, CommandeUncheckedUpdateWithoutTablesInput>
  }

  export type CommandeUpdateManyWithWhereWithoutTablesInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutTablesInput>
  }

  export type CommandeCreateWithoutEmployeInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    client?: ClientCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutEmployeInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_client?: number | null
    id_reservation?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutEmployeInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput>
  }

  export type CommandeCreateManyEmployeInputEnvelope = {
    data: CommandeCreateManyEmployeInput | CommandeCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type CommandeUpsertWithWhereUniqueWithoutEmployeInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutEmployeInput, CommandeUncheckedUpdateWithoutEmployeInput>
    create: XOR<CommandeCreateWithoutEmployeInput, CommandeUncheckedCreateWithoutEmployeInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutEmployeInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutEmployeInput, CommandeUncheckedUpdateWithoutEmployeInput>
  }

  export type CommandeUpdateManyWithWhereWithoutEmployeInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutEmployeInput>
  }

  export type PlatCreateWithoutCategorieInput = {
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    lignes_cmd?: Ligne_CommandeCreateNestedManyWithoutPlatInput
  }

  export type PlatUncheckedCreateWithoutCategorieInput = {
    id_plat?: number
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    lignes_cmd?: Ligne_CommandeUncheckedCreateNestedManyWithoutPlatInput
  }

  export type PlatCreateOrConnectWithoutCategorieInput = {
    where: PlatWhereUniqueInput
    create: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput>
  }

  export type PlatCreateManyCategorieInputEnvelope = {
    data: PlatCreateManyCategorieInput | PlatCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type PlatUpsertWithWhereUniqueWithoutCategorieInput = {
    where: PlatWhereUniqueInput
    update: XOR<PlatUpdateWithoutCategorieInput, PlatUncheckedUpdateWithoutCategorieInput>
    create: XOR<PlatCreateWithoutCategorieInput, PlatUncheckedCreateWithoutCategorieInput>
  }

  export type PlatUpdateWithWhereUniqueWithoutCategorieInput = {
    where: PlatWhereUniqueInput
    data: XOR<PlatUpdateWithoutCategorieInput, PlatUncheckedUpdateWithoutCategorieInput>
  }

  export type PlatUpdateManyWithWhereWithoutCategorieInput = {
    where: PlatScalarWhereInput
    data: XOR<PlatUpdateManyMutationInput, PlatUncheckedUpdateManyWithoutCategorieInput>
  }

  export type PlatScalarWhereInput = {
    AND?: PlatScalarWhereInput | PlatScalarWhereInput[]
    OR?: PlatScalarWhereInput[]
    NOT?: PlatScalarWhereInput | PlatScalarWhereInput[]
    id_plat?: IntFilter<"Plat"> | number
    libelle?: StringFilter<"Plat"> | string
    prix_actuel?: DecimalFilter<"Plat"> | Decimal | DecimalJsLike | number | string
    disponible?: BoolFilter<"Plat"> | boolean
    id_categorie?: IntFilter<"Plat"> | number
  }

  export type CategorieCreateWithoutPlatsInput = {
    libelle: string
  }

  export type CategorieUncheckedCreateWithoutPlatsInput = {
    id_categorie?: number
    libelle: string
  }

  export type CategorieCreateOrConnectWithoutPlatsInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutPlatsInput, CategorieUncheckedCreateWithoutPlatsInput>
  }

  export type Ligne_CommandeCreateWithoutPlatInput = {
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    commande: CommandeCreateNestedOneWithoutLignesInput
  }

  export type Ligne_CommandeUncheckedCreateWithoutPlatInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_commande: number
  }

  export type Ligne_CommandeCreateOrConnectWithoutPlatInput = {
    where: Ligne_CommandeWhereUniqueInput
    create: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput>
  }

  export type Ligne_CommandeCreateManyPlatInputEnvelope = {
    data: Ligne_CommandeCreateManyPlatInput | Ligne_CommandeCreateManyPlatInput[]
    skipDuplicates?: boolean
  }

  export type CategorieUpsertWithoutPlatsInput = {
    update: XOR<CategorieUpdateWithoutPlatsInput, CategorieUncheckedUpdateWithoutPlatsInput>
    create: XOR<CategorieCreateWithoutPlatsInput, CategorieUncheckedCreateWithoutPlatsInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutPlatsInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutPlatsInput, CategorieUncheckedUpdateWithoutPlatsInput>
  }

  export type CategorieUpdateWithoutPlatsInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutPlatsInput = {
    id_categorie?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type Ligne_CommandeUpsertWithWhereUniqueWithoutPlatInput = {
    where: Ligne_CommandeWhereUniqueInput
    update: XOR<Ligne_CommandeUpdateWithoutPlatInput, Ligne_CommandeUncheckedUpdateWithoutPlatInput>
    create: XOR<Ligne_CommandeCreateWithoutPlatInput, Ligne_CommandeUncheckedCreateWithoutPlatInput>
  }

  export type Ligne_CommandeUpdateWithWhereUniqueWithoutPlatInput = {
    where: Ligne_CommandeWhereUniqueInput
    data: XOR<Ligne_CommandeUpdateWithoutPlatInput, Ligne_CommandeUncheckedUpdateWithoutPlatInput>
  }

  export type Ligne_CommandeUpdateManyWithWhereWithoutPlatInput = {
    where: Ligne_CommandeScalarWhereInput
    data: XOR<Ligne_CommandeUpdateManyMutationInput, Ligne_CommandeUncheckedUpdateManyWithoutPlatInput>
  }

  export type Ligne_CommandeScalarWhereInput = {
    AND?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
    OR?: Ligne_CommandeScalarWhereInput[]
    NOT?: Ligne_CommandeScalarWhereInput | Ligne_CommandeScalarWhereInput[]
    id_ligne?: IntFilter<"Ligne_Commande"> | number
    quantite?: IntFilter<"Ligne_Commande"> | number
    prix_moment?: DecimalFilter<"Ligne_Commande"> | Decimal | DecimalJsLike | number | string
    note_cuisson?: StringNullableFilter<"Ligne_Commande"> | string | null
    id_commande?: IntFilter<"Ligne_Commande"> | number
    id_plat?: IntFilter<"Ligne_Commande"> | number
  }

  export type ClientCreateWithoutReservationsInput = {
    nom: string
    telephone?: string | null
    email?: string | null
    commandes?: CommandeCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutReservationsInput = {
    id_client?: number
    nom: string
    telephone?: string | null
    email?: string | null
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutReservationsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutReservationsInput, ClientUncheckedCreateWithoutReservationsInput>
  }

  export type Table_RestaurantCreateWithoutReservationsInput = {
    numero: number
    capacite: number
    zone?: string | null
    commandes?: CommandeCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantUncheckedCreateWithoutReservationsInput = {
    id_table?: number
    numero: number
    capacite: number
    zone?: string | null
    commandes?: CommandeUncheckedCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantCreateOrConnectWithoutReservationsInput = {
    where: Table_RestaurantWhereUniqueInput
    create: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput>
  }

  export type CommandeCreateWithoutReservationInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    client?: ClientCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutReservationInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutReservationInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput>
  }

  export type CommandeCreateManyReservationInputEnvelope = {
    data: CommandeCreateManyReservationInput | CommandeCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutReservationsInput = {
    update: XOR<ClientUpdateWithoutReservationsInput, ClientUncheckedUpdateWithoutReservationsInput>
    create: XOR<ClientCreateWithoutReservationsInput, ClientUncheckedCreateWithoutReservationsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutReservationsInput, ClientUncheckedUpdateWithoutReservationsInput>
  }

  export type ClientUpdateWithoutReservationsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    commandes?: CommandeUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutReservationsInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type Table_RestaurantUpsertWithWhereUniqueWithoutReservationsInput = {
    where: Table_RestaurantWhereUniqueInput
    update: XOR<Table_RestaurantUpdateWithoutReservationsInput, Table_RestaurantUncheckedUpdateWithoutReservationsInput>
    create: XOR<Table_RestaurantCreateWithoutReservationsInput, Table_RestaurantUncheckedCreateWithoutReservationsInput>
  }

  export type Table_RestaurantUpdateWithWhereUniqueWithoutReservationsInput = {
    where: Table_RestaurantWhereUniqueInput
    data: XOR<Table_RestaurantUpdateWithoutReservationsInput, Table_RestaurantUncheckedUpdateWithoutReservationsInput>
  }

  export type Table_RestaurantUpdateManyWithWhereWithoutReservationsInput = {
    where: Table_RestaurantScalarWhereInput
    data: XOR<Table_RestaurantUpdateManyMutationInput, Table_RestaurantUncheckedUpdateManyWithoutReservationsInput>
  }

  export type Table_RestaurantScalarWhereInput = {
    AND?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
    OR?: Table_RestaurantScalarWhereInput[]
    NOT?: Table_RestaurantScalarWhereInput | Table_RestaurantScalarWhereInput[]
    id_table?: IntFilter<"Table_Restaurant"> | number
    numero?: IntFilter<"Table_Restaurant"> | number
    capacite?: IntFilter<"Table_Restaurant"> | number
    zone?: StringNullableFilter<"Table_Restaurant"> | string | null
  }

  export type CommandeUpsertWithWhereUniqueWithoutReservationInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutReservationInput, CommandeUncheckedUpdateWithoutReservationInput>
    create: XOR<CommandeCreateWithoutReservationInput, CommandeUncheckedCreateWithoutReservationInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutReservationInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutReservationInput, CommandeUncheckedUpdateWithoutReservationInput>
  }

  export type CommandeUpdateManyWithWhereWithoutReservationInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutReservationInput>
  }

  export type EmployeCreateWithoutCommandesInput = {
    nom: string
    prenom: string
    role: string
  }

  export type EmployeUncheckedCreateWithoutCommandesInput = {
    id_employe?: number
    nom: string
    prenom: string
    role: string
  }

  export type EmployeCreateOrConnectWithoutCommandesInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutCommandesInput, EmployeUncheckedCreateWithoutCommandesInput>
  }

  export type ClientCreateWithoutCommandesInput = {
    nom: string
    telephone?: string | null
    email?: string | null
    reservations?: ReservationCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCommandesInput = {
    id_client?: number
    nom: string
    telephone?: string | null
    email?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCommandesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
  }

  export type ReservationCreateWithoutCommandesInput = {
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    client: ClientCreateNestedOneWithoutReservationsInput
    tables?: Table_RestaurantCreateNestedManyWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutCommandesInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
    id_client: number
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutReservationsInput
  }

  export type ReservationCreateOrConnectWithoutCommandesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCommandesInput, ReservationUncheckedCreateWithoutCommandesInput>
  }

  export type Table_RestaurantCreateWithoutCommandesInput = {
    numero: number
    capacite: number
    zone?: string | null
    reservations?: ReservationCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantUncheckedCreateWithoutCommandesInput = {
    id_table?: number
    numero: number
    capacite: number
    zone?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutTablesInput
  }

  export type Table_RestaurantCreateOrConnectWithoutCommandesInput = {
    where: Table_RestaurantWhereUniqueInput
    create: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput>
  }

  export type Ligne_CommandeCreateWithoutCommandeInput = {
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    plat: PlatCreateNestedOneWithoutLignes_cmdInput
  }

  export type Ligne_CommandeUncheckedCreateWithoutCommandeInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_plat: number
  }

  export type Ligne_CommandeCreateOrConnectWithoutCommandeInput = {
    where: Ligne_CommandeWhereUniqueInput
    create: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput>
  }

  export type Ligne_CommandeCreateManyCommandeInputEnvelope = {
    data: Ligne_CommandeCreateManyCommandeInput | Ligne_CommandeCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutCommandeInput = {
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
  }

  export type PaiementUncheckedCreateWithoutCommandeInput = {
    id_paiement?: number
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
  }

  export type PaiementCreateOrConnectWithoutCommandeInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
  }

  export type PaiementCreateManyCommandeInputEnvelope = {
    data: PaiementCreateManyCommandeInput | PaiementCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeUpsertWithoutCommandesInput = {
    update: XOR<EmployeUpdateWithoutCommandesInput, EmployeUncheckedUpdateWithoutCommandesInput>
    create: XOR<EmployeCreateWithoutCommandesInput, EmployeUncheckedCreateWithoutCommandesInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutCommandesInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutCommandesInput, EmployeUncheckedUpdateWithoutCommandesInput>
  }

  export type EmployeUpdateWithoutCommandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeUncheckedUpdateWithoutCommandesInput = {
    id_employe?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpsertWithoutCommandesInput = {
    update: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCommandesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type ClientUpdateWithoutCommandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCommandesInput = {
    id_client?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ReservationUpsertWithoutCommandesInput = {
    update: XOR<ReservationUpdateWithoutCommandesInput, ReservationUncheckedUpdateWithoutCommandesInput>
    create: XOR<ReservationCreateWithoutCommandesInput, ReservationUncheckedCreateWithoutCommandesInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutCommandesInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutCommandesInput, ReservationUncheckedUpdateWithoutCommandesInput>
  }

  export type ReservationUpdateWithoutCommandesInput = {
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutReservationsNestedInput
    tables?: Table_RestaurantUpdateManyWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCommandesInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    tables?: Table_RestaurantUncheckedUpdateManyWithoutReservationsNestedInput
  }

  export type Table_RestaurantUpsertWithWhereUniqueWithoutCommandesInput = {
    where: Table_RestaurantWhereUniqueInput
    update: XOR<Table_RestaurantUpdateWithoutCommandesInput, Table_RestaurantUncheckedUpdateWithoutCommandesInput>
    create: XOR<Table_RestaurantCreateWithoutCommandesInput, Table_RestaurantUncheckedCreateWithoutCommandesInput>
  }

  export type Table_RestaurantUpdateWithWhereUniqueWithoutCommandesInput = {
    where: Table_RestaurantWhereUniqueInput
    data: XOR<Table_RestaurantUpdateWithoutCommandesInput, Table_RestaurantUncheckedUpdateWithoutCommandesInput>
  }

  export type Table_RestaurantUpdateManyWithWhereWithoutCommandesInput = {
    where: Table_RestaurantScalarWhereInput
    data: XOR<Table_RestaurantUpdateManyMutationInput, Table_RestaurantUncheckedUpdateManyWithoutCommandesInput>
  }

  export type Ligne_CommandeUpsertWithWhereUniqueWithoutCommandeInput = {
    where: Ligne_CommandeWhereUniqueInput
    update: XOR<Ligne_CommandeUpdateWithoutCommandeInput, Ligne_CommandeUncheckedUpdateWithoutCommandeInput>
    create: XOR<Ligne_CommandeCreateWithoutCommandeInput, Ligne_CommandeUncheckedCreateWithoutCommandeInput>
  }

  export type Ligne_CommandeUpdateWithWhereUniqueWithoutCommandeInput = {
    where: Ligne_CommandeWhereUniqueInput
    data: XOR<Ligne_CommandeUpdateWithoutCommandeInput, Ligne_CommandeUncheckedUpdateWithoutCommandeInput>
  }

  export type Ligne_CommandeUpdateManyWithWhereWithoutCommandeInput = {
    where: Ligne_CommandeScalarWhereInput
    data: XOR<Ligne_CommandeUpdateManyMutationInput, Ligne_CommandeUncheckedUpdateManyWithoutCommandeInput>
  }

  export type PaiementUpsertWithWhereUniqueWithoutCommandeInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutCommandeInput, PaiementUncheckedUpdateWithoutCommandeInput>
    create: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutCommandeInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutCommandeInput, PaiementUncheckedUpdateWithoutCommandeInput>
  }

  export type PaiementUpdateManyWithWhereWithoutCommandeInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutCommandeInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id_paiement?: IntFilter<"Paiement"> | number
    date_paiement?: DateTimeFilter<"Paiement"> | Date | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    methode?: StringFilter<"Paiement"> | string
    id_commande?: IntFilter<"Paiement"> | number
  }

  export type CommandeCreateWithoutLignesInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    client?: ClientCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    paiements?: PaiementCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutLignesInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    id_reservation?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutLignesInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutLignesInput, CommandeUncheckedCreateWithoutLignesInput>
  }

  export type PlatCreateWithoutLignes_cmdInput = {
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    categorie: CategorieCreateNestedOneWithoutPlatsInput
  }

  export type PlatUncheckedCreateWithoutLignes_cmdInput = {
    id_plat?: number
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
    id_categorie: number
  }

  export type PlatCreateOrConnectWithoutLignes_cmdInput = {
    where: PlatWhereUniqueInput
    create: XOR<PlatCreateWithoutLignes_cmdInput, PlatUncheckedCreateWithoutLignes_cmdInput>
  }

  export type CommandeUpsertWithoutLignesInput = {
    update: XOR<CommandeUpdateWithoutLignesInput, CommandeUncheckedUpdateWithoutLignesInput>
    create: XOR<CommandeCreateWithoutLignesInput, CommandeUncheckedCreateWithoutLignesInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutLignesInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutLignesInput, CommandeUncheckedUpdateWithoutLignesInput>
  }

  export type CommandeUpdateWithoutLignesInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    client?: ClientUpdateOneWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutLignesInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type PlatUpsertWithoutLignes_cmdInput = {
    update: XOR<PlatUpdateWithoutLignes_cmdInput, PlatUncheckedUpdateWithoutLignes_cmdInput>
    create: XOR<PlatCreateWithoutLignes_cmdInput, PlatUncheckedCreateWithoutLignes_cmdInput>
    where?: PlatWhereInput
  }

  export type PlatUpdateToOneWithWhereWithoutLignes_cmdInput = {
    where?: PlatWhereInput
    data: XOR<PlatUpdateWithoutLignes_cmdInput, PlatUncheckedUpdateWithoutLignes_cmdInput>
  }

  export type PlatUpdateWithoutLignes_cmdInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    categorie?: CategorieUpdateOneRequiredWithoutPlatsNestedInput
  }

  export type PlatUncheckedUpdateWithoutLignes_cmdInput = {
    id_plat?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    id_categorie?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeCreateWithoutPaiementsInput = {
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    employe: EmployeCreateNestedOneWithoutCommandesInput
    client?: ClientCreateNestedOneWithoutCommandesInput
    reservation?: ReservationCreateNestedOneWithoutCommandesInput
    tables?: Table_RestaurantCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutPaiementsInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
    id_reservation?: number | null
    tables?: Table_RestaurantUncheckedCreateNestedManyWithoutCommandesInput
    lignes?: Ligne_CommandeUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutPaiementsInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutPaiementsInput, CommandeUncheckedCreateWithoutPaiementsInput>
  }

  export type CommandeUpsertWithoutPaiementsInput = {
    update: XOR<CommandeUpdateWithoutPaiementsInput, CommandeUncheckedUpdateWithoutPaiementsInput>
    create: XOR<CommandeCreateWithoutPaiementsInput, CommandeUncheckedCreateWithoutPaiementsInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutPaiementsInput, CommandeUncheckedUpdateWithoutPaiementsInput>
  }

  export type CommandeUpdateWithoutPaiementsInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    client?: ClientUpdateOneWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutPaiementsInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type ReservationCreateManyClientInput = {
    id_reservation?: number
    date_heure: Date | string
    nb_personnes: number
    statut?: string
  }

  export type CommandeCreateManyClientInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_reservation?: number | null
  }

  export type ReservationUpdateWithoutClientInput = {
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    tables?: Table_RestaurantUpdateManyWithoutReservationsNestedInput
    commandes?: CommandeUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutClientInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    tables?: Table_RestaurantUncheckedUpdateManyWithoutReservationsNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutClientInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeUpdateWithoutClientInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutClientInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutClientInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationUpdateWithoutTablesInput = {
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutReservationsNestedInput
    commandes?: CommandeUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTablesInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
    commandes?: CommandeUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutTablesInput = {
    id_reservation?: IntFieldUpdateOperationsInput | number
    date_heure?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_personnes?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    id_client?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeUpdateWithoutTablesInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    client?: ClientUpdateOneWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutTablesInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutTablesInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommandeCreateManyEmployeInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_client?: number | null
    id_reservation?: number | null
  }

  export type CommandeUpdateWithoutEmployeInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneWithoutCommandesNestedInput
    reservation?: ReservationUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutEmployeInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutEmployeInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    id_reservation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatCreateManyCategorieInput = {
    id_plat?: number
    libelle: string
    prix_actuel: Decimal | DecimalJsLike | number | string
    disponible?: boolean
  }

  export type PlatUpdateWithoutCategorieInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    lignes_cmd?: Ligne_CommandeUpdateManyWithoutPlatNestedInput
  }

  export type PlatUncheckedUpdateWithoutCategorieInput = {
    id_plat?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    lignes_cmd?: Ligne_CommandeUncheckedUpdateManyWithoutPlatNestedInput
  }

  export type PlatUncheckedUpdateManyWithoutCategorieInput = {
    id_plat?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    prix_actuel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Ligne_CommandeCreateManyPlatInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_commande: number
  }

  export type Ligne_CommandeUpdateWithoutPlatInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    commande?: CommandeUpdateOneRequiredWithoutLignesNestedInput
  }

  export type Ligne_CommandeUncheckedUpdateWithoutPlatInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_commande?: IntFieldUpdateOperationsInput | number
  }

  export type Ligne_CommandeUncheckedUpdateManyWithoutPlatInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_commande?: IntFieldUpdateOperationsInput | number
  }

  export type CommandeCreateManyReservationInput = {
    id_commande?: number
    date_creation?: Date | string
    type_cmd?: string
    statut_cuisine?: string
    id_employe: number
    id_client?: number | null
  }

  export type Table_RestaurantUpdateWithoutReservationsInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    commandes?: CommandeUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantUncheckedUpdateWithoutReservationsInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    commandes?: CommandeUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantUncheckedUpdateManyWithoutReservationsInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeUpdateWithoutReservationInput = {
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    employe?: EmployeUpdateOneRequiredWithoutCommandesNestedInput
    client?: ClientUpdateOneWithoutCommandesNestedInput
    tables?: Table_RestaurantUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutReservationInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
    tables?: Table_RestaurantUncheckedUpdateManyWithoutCommandesNestedInput
    lignes?: Ligne_CommandeUncheckedUpdateManyWithoutCommandeNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutReservationInput = {
    id_commande?: IntFieldUpdateOperationsInput | number
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    type_cmd?: StringFieldUpdateOperationsInput | string
    statut_cuisine?: StringFieldUpdateOperationsInput | string
    id_employe?: IntFieldUpdateOperationsInput | number
    id_client?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Ligne_CommandeCreateManyCommandeInput = {
    id_ligne?: number
    quantite?: number
    prix_moment: Decimal | DecimalJsLike | number | string
    note_cuisson?: string | null
    id_plat: number
  }

  export type PaiementCreateManyCommandeInput = {
    id_paiement?: number
    date_paiement?: Date | string
    montant: Decimal | DecimalJsLike | number | string
    methode: string
  }

  export type Table_RestaurantUpdateWithoutCommandesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantUncheckedUpdateWithoutCommandesInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type Table_RestaurantUncheckedUpdateManyWithoutCommandesInput = {
    id_table?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacite?: IntFieldUpdateOperationsInput | number
    zone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Ligne_CommandeUpdateWithoutCommandeInput = {
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    plat?: PlatUpdateOneRequiredWithoutLignes_cmdNestedInput
  }

  export type Ligne_CommandeUncheckedUpdateWithoutCommandeInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_plat?: IntFieldUpdateOperationsInput | number
  }

  export type Ligne_CommandeUncheckedUpdateManyWithoutCommandeInput = {
    id_ligne?: IntFieldUpdateOperationsInput | number
    quantite?: IntFieldUpdateOperationsInput | number
    prix_moment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note_cuisson?: NullableStringFieldUpdateOperationsInput | string | null
    id_plat?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementUpdateWithoutCommandeInput = {
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateWithoutCommandeInput = {
    id_paiement?: IntFieldUpdateOperationsInput | number
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateManyWithoutCommandeInput = {
    id_paiement?: IntFieldUpdateOperationsInput | number
    date_paiement?: DateTimeFieldUpdateOperationsInput | Date | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    methode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
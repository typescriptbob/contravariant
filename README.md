# contravariant

## A short explanation of contravariance in TypeScript

TypeScript functions are contravarient with regard to their parameters.

Types and sub types are easy to think about for basic types

```typescript

// Each of the following are true

type NumberExtendsAny = number extends any? true: false;
type ObjectExtendsAny = object extends any ? true : false;
type NeverExtendsObject = never extends object ? true : false;
```

The object subtype relationship is defined by the set of properties of the object.

```typescript

// Each of the following are true

type T1 = { a: number } extends {} ? true: false;
type T2 = { a: number, b: number } extends {a: number} ? true : false;

```
You can think of this in terms of inheritance - a class that inherits from a base class is a subtype of the base. It can add more properties, but it cannot remove any.

Functions also have subtypes and supertypes.

```typescript
function f1() { }
function f2(x: number) { }
function f3(x: number, y: number) { }
function f4() { return 42;}

// Each of the following are false

type f2ExtendsF1 = typeof f2 extends typeof f1? true: false;
type f3ExtendsF2 = typeof f3 extends typeof f2? true: false;
type f4ExtendsF1 = typeof f3 extends typeof f2? true: false;

```
but these type relationships are true

```typescript

function f1(x: any) { }
function f2(x: number) { }
function f3(x: {a: number, b: number}) { }
function f4(x: { a: number }) { console.log(x.a); }

type f2ExtendsF1 = typeof f2 extends typeof f1? true: false;
type f3ExtendsF1 = typeof f3 extends typeof f1? true: false;
type f4ExtendsF3 = typeof f4 extends typeof f3? true : false;
```

Note how the following is valid.

```typescript
function apply(fn: typeof f3) {
    fn({a:42, b:64});
}

apply(f4);
```
You can see here that the Higher Order function expects a function of f3 type, but it accepts a function of f4 type becuase f4 is a subtype of f3. This is because the parameter of f4 is a supertype of the parameter of f3. Hence we say the function is contravariant to the type of it's parameters.






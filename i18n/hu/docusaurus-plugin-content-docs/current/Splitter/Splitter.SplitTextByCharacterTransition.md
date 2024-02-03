---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Visszaad egy függvényt, amely egy szöveglistára osztja fel a szövegeket az egyik karaktertípusról egy másikra való áttérés szerint. A(z) \{0} és \{1} paraméterek lehetnek karakterlisták, vagy olyan függvények, amelyek egy karaktert vesznek fel, és az igaz/hamis értéket adják vissza.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Visszaad egy függvényt, amely egy szöveglistára osztja fel a szövegeket az egyik karaktertípusról egy másikra való áttérés szerint. A(z) <code>before</code> és <code>after</code> paraméterek lehetnek karakterlisták, vagy olyan függvények, amelyek egy karaktert vesznek fel, és az igaz/hamis értéket adják vissza.


## Examples

### Example #1 
A bemenet felosztása minden alkalommal, amikor egy kis- vagy nagybetűt számjegy követ.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter

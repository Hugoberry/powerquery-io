---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Pateikiama `text` dalis prieš nurodytą `delimiter`. Pasirenkamas skaitinis `index` parodo, į kurį `delimiter` atvejį reikia atsižvelgti. Pasirenkamas sąrašas `index` parodo, į kurį `delimiter` atvejį reikia atsižvelgti ir ar indeksavimą reikia atlikti nuo įvesties pradžios ar galo.


## Examples

### Example #1
Gauti 111-222-333 dalį prieš (pirmąjį) brūkšnelį.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Gauti 111-222-333 dalį prieš antrąjį brūkšnelį.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Gauti 111-222-333 dalį prieš antrąjį brūkšnelį nuo galo.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations

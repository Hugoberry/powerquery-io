---
title: Logical.From
---

# Logical.From


Ustvari logično vrednost iz dane vrednosti.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Iz navedene vrednosti `value` vrne vrednost `logical`. Če je dana vrednost `value` `null`, `Logical.From` vrne `null`. Če je dana vrednost `value` `logical`, je vrnjena vrednost `value`. V vrednost `logical` lahko pretvorite vrednosti teh vrst:

-   `text`: vrednost `logical` iz besedilne vrednosti, ki je `"true"` ali `"false"`. Za podrobnosti glejte `Logical.FromText`.
-   `number`: `false`, če je `value` enako `0`, sicer `true`.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Pretvorite `2` v vrednost `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical

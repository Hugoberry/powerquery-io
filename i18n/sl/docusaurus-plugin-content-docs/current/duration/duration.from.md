---
title: Duration.From
---

# Duration.From


Ustvari trajanje iz dane vrednosti.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Vrne vrednost trajanja iz navedene vrednosti.

-   `value`: Vrednost, iz katere je izpeljano trajanje. Če je navedena vrednost `value` `null`, ta funkcija vrne `null`. Če je navedena vrednost `value` `duration`, je vrnjena vrednost `value`. Vrednosti sledečih vrst je mogoče pretvoriti v vrednost `duration`:
    -   `text`: vrednost `duration` iz besedilnih oblik zapisa pretečenega časa (d.h:m:s). Za podrobnosti glejte `Duration.FromText`.
    -   `number`: vrednost `duration`, ki ustreza številu celih dni in delnih dni, izraženih z vrednostjo `value`.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Pretvorite `2.525` v vrednost `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Pretvorite besedilno vrednost `"2.05:55:20.34567"` v vrednost `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration

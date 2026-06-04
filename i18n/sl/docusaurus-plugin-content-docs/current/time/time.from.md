---
title: Time.From
---

# Time.From


Ustvari časovno vrednost iz dane vrednosti.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Iz navedene vrednosti `value` vrne vrednost `time`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI"). Če je navedena vrednost `value` `null`, `Time.From` vrne `null`. Če je navedena vrednost `value` `time`, je vrnjena vrednost `value`. V vrednost `time` lahko pretvorite vrednosti teh vrst:

-   `text`: vrednost `time` iz predstavitve v obliki besedila. Za podrobnosti glejte `Time.FromText`.
-   `datetime`: komponenta"time"za `value`.
-   `datetimezone`: komponenta"time"lokalnega ekvivalenta"datetime"za `value`.
-   `number`: ekvivalent `time` za število dni, izraženih z ulomki, predstavljen kot `value`. Če je `value` negativno ali večje od oz. enako 1, je vrnjena napaka.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Pretvorite `0.7575` v vrednost `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Pretvorite `#datetime(1899, 12, 30, 06, 45, 12)` v vrednost `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

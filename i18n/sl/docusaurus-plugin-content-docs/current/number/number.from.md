---
title: Number.From
---

# Number.From


Ustvari številsko vrednost iz dane vrednosti.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrne vrednost `number` iz navedene vrednosti `value`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI"). Če je navedena vrednost `value` `null`, `Number.From` vrne `null`. Če je navedena vrednost `value` `number`, je vrnjena vrednost `value`. V vrednost `number` lahko pretvorite vrednosti teh vrst:

-   `text`: vrednost `number` iz predstavitve v obliki besedila. Obravnavane so običajne oblike besedila ("15","3,423.10","5.0E-10"). Za podrobnosti glejte `Number.FromText`.
-   `logical`: 1 za `true`, 0 za `false`.
-   `datetime`: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE.
-   `datetimezone`: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE za lokalni datum in čas `value`.
-   `date`: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE.
-   `time`: predstavljeno kot dnevi, izraženi z ulomki.
-   `duration`: predstavljeno v celoti in kot dnevi, izraženi z ulomki.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Poiščite vrednost `number` za `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Poiščite vrednost `number` za `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Pridobite vrednost `number` za `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

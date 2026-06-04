---
title: Number.FromText
---

# Number.FromText


No parasto teksta formātu (15, 3,423.10, 5,0E-10) vērtībām tiek izveidotas skaitliskās vērtības.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Atgriež tipa `number` vērtību, kas ir iegūta no norādītās teksta vērtības `text`.

-   `text`: teksta formātā izteikta skaitliskā vērtība. Vērtībai ir jābūt izteiktai parastā skaitliskā formātā, piemēram, "15", "3423,10" vai "5,0E-10".
-   `culture`: neobligāta kultūra, kas nosaka, kā tiek interpretēts parametrs `text` (piemēram, "lv-LV").


## Examples

### Example #1
Iegūstiet skaitlisko vērtību no vērtības `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Iegūstiet skaitlisko vērtību no vērtības `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting

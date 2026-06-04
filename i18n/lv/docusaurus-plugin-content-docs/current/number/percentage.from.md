---
title: Percentage.From
---

# Percentage.From


Atgriež dotās vērtības procentuālo vērtību.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Atgriež dotās izteiksmes `value` vērtību `percentage`. Ja dotā izteiksme `value` ir `Null`, komanda `Percentage.From` atgriež vērtību `Null`. Ja dotā izteiksme `value` ir formātā `text` ar noslēdzošu procentu zīmi, tiek atgriezts pārveidotais decimāldaļskaitlis. Citos gadījumos vērtība tiks konvertēta `number`, izmantojot `Number.From`. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV").


## Examples

### Example #1
Iegūstiet izteiksmes `"12.3%"` vērtību `percentage`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

---
title: Currency.From
---

# Currency.From


Atgriež valūtas vērtību no dotās vērtības.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Tiek atgriezta tipa `currency` vērtība, kas ir iegūta no norādītās parametra `value` vērtības. Ja norādītā parametra `value` vērtība ir `null`, funkcija `Currency.From` atgriež vērtību `null`. Ja norādītās parametra `value` vērtības tips ir `number` un tā ir valūtas vērtību diapazonā, parametra `value` vērtības daļa aiz komata tiek noapaļota līdz 4 cipariem un tā tiek atgriezta. Ja `value` ir jebkura cita veida, tas vispirms tiks konvertēts par `number`, izmantojot `Number.FromText`. Derīgs valūtas vērtību diapazons ir no `-922337203685477,5808` līdz `922337203685477,5807`. Informāciju par pieejamajiem noapaļošanas režīmiem skatiet funkcijas `Number.Round` aprakstā. Pēc noklusējuma tiek izmantots režīms `RoundingMode.ToEven`. Ir iespējams nodrošināt arī papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt `"1.23455"` vērtību `currency`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Iegūstiet tipa `currency` vērtību `"1.23455"`, izmantojot funkciju `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting

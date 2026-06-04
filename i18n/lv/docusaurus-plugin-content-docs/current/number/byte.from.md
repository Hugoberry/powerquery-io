---
title: Byte.From
---

# Byte.From


Izveido veselu 8 bitu skaitli no dotās vērtības.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Atgriež 8 bitu veselā skaitļa `number` vērtību no dotā `value`. Ja dotais `value` ir `null`, `Byte.From` atgriež `null`. Ja dotais `value` ir `number` 8 bitu veselā skaitļa diapazonā bez daļskaitļa, tad tiek atgriezts `value`. Ja skaitlis ir daļskaitlis, tad skaitlis tiek noapaļots atbilstoši norādītajam noapaļošanas režīmam. Noklusējuma noapaļošanas režīms ir `RoundingMode.ToEven`. Ja `value` ir jebkura cita veida, tad vispirms tas tiks konvertēts par `skaitli`, izmantojot `Number.FromText`. Skatiet `Number.Round`, lai uzzinātu par pieejamajiem noapaļošanas režīmiem. Ir iespējams izmantot papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt `"4"` vesela 8 bitu skaitļa `number` vērtību.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Iegūt `"4.5"` vesela 8 bitu skaitļa `number` vērtību, izmantojot `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

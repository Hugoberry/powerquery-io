---
title: Int64.From
---

# Int64.From


Izveido 64 bitu veselu skaitli no dotās vērtības.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Atgriež 64 bitu veselā skaitļa `number` vērtību no dotā `value`. Ja dotais `value` ir `null`, `Int64.From` atgriež `null`. Ja dotais `value` ir `number` 64 bitu veselā skaitļa diapazonā bez daļskaitļa, tad tiek atgriezts `value`. Ja skaitlis ir daļskaitlis, tad skaitlis tiek noapaļots atbilstoši norādītajam noapaļošanas režīmam. Noklusējuma noapaļošanas režīms ir `RoundingMode.ToEven`. Ja `value` ir jebkura cita veida, tad vispirms tas tiks konvertēts par `skaitli`, izmantojot `Number.FromText`. Skatiet `Number.Round`, lai uzzinātu par pieejamajiem noapaļošanas režīmiem. Ir iespējams izmantot papildu `culture` (piemēram, “lv-LV”).


## Examples

### Example #1
Iegūt 64 bitu veselā skaitļa `number` vērtību vērtībai `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
64 bitu vesela skaitļa `number` iegūšana no vērtības `"4.5"`, izmantojot režīmu `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting

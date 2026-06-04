---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Získa minúty časového pásma danej hodnoty.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Vráti minútovú zložku časového pásma hodnoty \`datetimezone\`.

-   `dateTimeZone`: Hodnota `datetimezone`, z ktorej sa extrahuje zložka časového pásma vyjadrená v minútach. Ak je `dateTimeZone` `null`, funkcia vráti kód `null`.


## Examples

### Example #1
Získa komponent minút časového pásma zadanej hodnoty datetimezone.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone

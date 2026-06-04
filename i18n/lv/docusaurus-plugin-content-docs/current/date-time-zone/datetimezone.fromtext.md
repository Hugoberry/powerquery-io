---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Izveidot datetimezone no lokālā, universālā un pielāgota datetimezone formāta.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Izveido `datetimezone` vērtību no teksta atveidojuma, `text`. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, izmantojot `"en-US"`, `"MMM"` ir `"Jan", "Feb", "Mar", ...`, bet, izmantojot `"ru-RU"`, `"MMM"` ir `"янв", "фев", "мар", ...`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertēt `"2010-12-31T01:30:00-08:00"` par `datetimezone` vērtību.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Konvertēt, izmantojot ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone

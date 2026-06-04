---
title: DateTime.FromText
---

# DateTime.FromText


Izveido datetimezone vērtību no vietējā un universālā datetime formāta.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Izveido `datetime` vērtību no teksta atveidojuma, `text`. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, izmantojot `"en-US"`, `"MMM"` ir `"Jan", "Feb", "Mar", ...`, bet, izmantojot `"ru-RU"`, `"MMM"` ir `"янв", "фев", "мар", ...`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertēt `"2010-12-31T01:30:00"` uz datetime vērtību.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertēt `"2010-12-31T01:30:00.121212"` uz datetime vērtību.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertēt `"2010-12-31T01:30:00"` uz datetime vērtību.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertēt `"20101231T013000"` uz datetime vērtību.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime

---
title: Time.FromText
---

# Time.FromText


Veido Time no vietējiem, universālajiem un pielāgotajiem Time formātiem.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Izveido `time` vērtību no teksta atveidojuma, `text`. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā notiks datuma parsēšana, izmantojot labākos rezultātus.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, `"en-US"` `"tt"` ir `"AM" vai "PM"`, bet `"ar-EG"` `"tt"` ir `"ص" vai "م"`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Pārvērtiet `"10:12:31am"` par Time vērtību.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Konvertēt `"1012"` uz Time vērtību.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Konvertēt `"10"` uz Time vērtību.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time

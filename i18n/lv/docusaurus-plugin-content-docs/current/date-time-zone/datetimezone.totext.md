---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Atgriež datetimezone vērtības teksta attēlojumu.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Atgriež `dateTimeZone` teksta atveidojumu. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `culture` tiek izmantots tikai mantotajām darbplūsmām. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Papildinformācijai dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā tiks izmantots noklusējuma datuma noformējums, ko nosaka `Culture`.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, izmantojot `"en-US"`, `"MMM"` ir `"Jan", "Feb", "Mar", ...`, bet, izmantojot `"ru-RU"`, `"MMM"` ir `"янв", "фев", "мар", ...`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` un `culture` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertēt `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` par `text` vērtību. *Rezultāts var atšķirties atkarībā no pašreizējās kultūras.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Konvertēt, izmantojot ISO 8601 modeli.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone

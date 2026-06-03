---
title: DateTime.FromText
---

# DateTime.FromText


Maakt een datum-/tijdzone van lokale en universele datum-/tijdindelingen.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Hiermee wordt een `datetime`\-waarde gemaakt van een tekstweergave, `text`. Er kan een optionele `record`\-parameter, `options`, worden opgegeven om aanvullende eigenschappen op te geven. De `record` kan de volgende velden bevatten:

-   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of `null` opgeeft, zal het tijdstip naar beste vermogen worden geparseerd.
-   `Culture`: als `Format` niet nul is, worden bepaalde indelingsaanduidingen bepaald door `Culture`. Bijvoorbeeld: in `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, terwijl in `"ru-RU"` `"MMM"` is `"янв", "фев", "мар", ...`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Als `Culture` de waarde `null` heeft of niet wordt gebruikt, wordt `Culture.Current` gebruikt.

Als u oudere werkstromen wilt ondersteunen, kan `options` ook een tekstwaarde zijn. Dit gedraagt zich hetzelfde als `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`'2010-12-31T01:30:00'` converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
`'2010-12-31T01:30:00.121212'` converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
`'2010-12-31T01:30:00'` converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
`'20101231T013000'` converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime

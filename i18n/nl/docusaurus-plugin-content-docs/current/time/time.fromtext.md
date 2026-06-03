---
title: Time.FromText
---

# Time.FromText


Hiermee maakt u een tijd op basis van lokale en universele en aangepaste tijdnotaties.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Hiermee wordt een `tijd`\-waarde van een tekstweergave `text` gemaakt. Er kan een optionele `record`\-parameter, `options`, worden opgegeven om aanvullende eigenschappen op te geven. De `record` kan de volgende velden bevatten:

-   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of `null` opgeeft, zal het tijdstip naar beste vermogen worden geparseerd.
-   `Culture`: als `Format` niet nul is, worden bepaalde indelingsaanduidingen bepaald door `Culture`. Voor `'en-US'` staat `"tt"` bijvoorbeeld voor `'AM' of 'PM'`, terwijl voor `'ar-EG'` `"tt"` staat voor `'ص' of 'م'`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Als `Culture` de waarde `null` heeft of niet wordt gebruikt, wordt `Culture.Current` gebruikt.

Als u oudere werkstromen wilt ondersteunen, kan `options` ook een tekstwaarde zijn. Dit gedraagt zich hetzelfde als `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`"10:12:31am"` converteren naar een tijdwaarde.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` converteren naar een tijdwaarde.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` converteren naar een tijdwaarde.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time

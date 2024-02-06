---
title: DateTimeZone.From
---

# DateTimeZone.From


Maakt een datum-/tijdzone van de opgegeven waarde.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Hiermee wordt een <code>datetimezone</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>DateTimeZone.From</code> <code>null</code> geretourneerd. Als de opgegeven waarde <code>value</code> <code>datetimezone</code> is, wordt de waarde <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>datetimezone</code>-waarde:\ <ul> <li><code>text</code>: een <code>datetimezone</code>-waarde vanuit de tekstweergave. Raadpleeg <code>DateTimeZone.FromText</code> voor meer informatie.</li> <li><code>date</code>: een <code>datetimezone</code> met <code>value</code> als datumcomponent, <code>12:00:00 AM</code> als het tijdcomponent, en de offset die overeenkomt met de lokale tijdzone.</li> <li><code>datetime</code>: een <code>datetimezone</code> met <code>value</code> als de datetime en de offset die overeenkomt met de lokale tijdzone.</li> <li><code>time</code>: een <code>datetimezone</code> met het datumequivalent van OLE-automatiseringsdatum van <code>0</code> als het datumcomponent, <code>value</code> als het tijdcomponent, en de offset die overeenkomt met de lokale tijdzone.</li> <li><code>number</code>: Een <code>datetimezone</code> met het datetime-equivalent van de OLE-automatiseringsdatum die wordt uitgedrukt door <code>value</code> en de offset die overeenkomt met de lokale tijdzone.</li> </ul>Als <code>value</code> van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; omzetten naar een &lt;code&gt;datetimezone&lt;/code&gt;waarde.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone

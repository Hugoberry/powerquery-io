---
title: Number.From
---

# Number.From


Maakt een getal van de opgegeven waarde


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een <code>number</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>Number.From</code> <code>null</code> geretourneerd. Als de opgegeven waarde <code>value</code> <code>number</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>number</code>-waarde: <ul> <li><code>text</code>: een <code>number</code>-waarde van de tekstweergave. Algemene tekstindelingen worden verwerkt (15, 3.423,10, 5.0E-10). Raadpleeg <code>Number.FromText</code> voor meer informatie.</li> <li><code>logical</code>: 1 voor <code>true</code>, 0 voor <code>false</code>.</li> <li><code>datetime</code>: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat.</li> <li><code>datetimezone</code>: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat van de lokale datum en tijd van <code>value</code>.</li> <li><code>date</code>: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat.</li> <li><code>time</code>: uitgedrukt in gedeeltelijke dagen.</li> <li><code>duration</code>: uitgedrukt in gedeeltelijke en gehele dagen.</li> </ul>Als <code>value</code> van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1 
De &lt;code&gt;number&lt;/code&gt; waarde van &lt;code&gt;&#34;4&#34;&lt;/code&gt; ophalen.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
De &lt;code&gt;number&lt;/code&gt; waarde van &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; ophalen.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
De waarde &lt;code&gt;number&lt;/code&gt; ophalen uit &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting

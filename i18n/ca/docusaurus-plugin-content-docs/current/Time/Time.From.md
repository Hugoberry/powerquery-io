---
title: Time.From
---

# Time.From


## Description

Crea una hora a partir del valor donat.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Retorna un valor <code>time</code> a partir del valor <code>value</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Time.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>time</code>, es retorna el valor <code>value</code>. Els valors dels tipus següents es poden convertir en un valor <code>time</code>:      <ul>        <li><code>text</code>: valor <code>time</code> d'una representació textual. Consulteu <code>Time.FromText</code> per obtenir-ne informació.</li>        <li><code>datetime</code>: component d'hora del valor <code>value</code>.</li>        <li><code>datetimezone</code>: component d'hora de l'equivalent del datetime local del valor <code>value</code>.</li>        <li><code>number</code>: valor <code>time</code> equivalent al nombre de dies fraccionaris expressat per l'element <code>value</code>. Si el valor <code>value</code> és negatiu o més gran o més petit que 1, es retorna un error.</li>      </ul>Si el valor <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;0.7575&lt;/code&gt; en un valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Converteix &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

---
title: DateTime.From
---

# DateTime.From


## Description

Crea un valor datetime a partir del valor donat.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Retorna un valor <code>datetime</code> a partir del valor <code>value</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").Si el valor <code>value</code> proporcionat és <code>null</code>, <code>DateTime.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>datetime</code>, es retorna el valor <code>value</code>. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor <code>datetime</code>:      <ul>        <li><code>text</code>: valor <code>datetime</code> a partir d'una representació textual. Consulteu <code>DateTime.FromText</code> per obtenir-ne informació.</li>        <li><code>date</code>: valor <code>datetime</code> amb l'element <code>value</code> com a component de data i <code>12:00:00 AM</code> com a component d'hora.</li>        <li><code>datetimezone</code>: equivalent del valor <code>datetime</code> local de l'element <code>value</code>.</li>        <li><code>time</code>: valor <code>datetime</code> amb l'equivalent de la data d'automatització OLE <code>0</code> com a component de data i l'element <code>value</code> com a component d'hora.</li>        <li><code>number</code>: equivalent del valor <code>datetime</code> de la data d'automatització OLE expressat per l'element <code>value</code>. </li>      </ul>Si el valor <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Converteix &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; en un valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime

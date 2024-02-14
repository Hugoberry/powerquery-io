---
title: Time.From
---

# Time.From


Crea una hora a partir del valor dado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Devuelve un valor <code>time</code> a partir del valor <code>value</code> dado. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").Si <code>value</code> es <code>null</code>, <code>Time.From</code> devuelve <code>null</code>. Si <code>value</code> es <code>time</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir a un valor <code>time</code>:      <ul>        <li><code>text</code>: valor <code>time</code> a partir de la representación de texto. Para más información, vea <code>Time.FromText</code>.</li>        <li><code>datetime</code>: componente de hora de <code>value</code>.</li>        <li><code>datetimezone</code>: componente de hora del equivalente datetime local de <code>value</code>.</li>        <li><code>number</code>: valor de <code>time</code> equivalente al número de días fraccionarios expresados por <code>value</code>. Si <code>value</code> es negativo o mayor o igual que 1, se devuelve un error.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;0.7575&lt;/code&gt; en un valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Convertir &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time

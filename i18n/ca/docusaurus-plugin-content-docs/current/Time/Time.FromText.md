---
title: Time.FromText
---

# Time.FromText


## Description

Crea una hora a partir dels formats d&#39;hora locals, universals i personalitzats.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Crea un valor de <code>time</code> a partir d'una representació textual, <code>text</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, l'hora s'analitzarà el millor possible.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"tt"</code> és <code>"AM" o "PM"</code>, mentre que a <code>"ar-EG"</code>, <code>"tt"</code> és <code>"ص" o "م"</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> també pot ser un valor de text. Té el mateix comportament que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; en un valor Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Converteix &lt;code&gt;&#34;1012&#34;&lt;/code&gt; en un valor Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Converteix &lt;code&gt;&#34;10&#34;&lt;/code&gt; en un valor Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time

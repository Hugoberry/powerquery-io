---
title: Time.ToText
---

# Time.ToText


## Description

Retorna una representació textual del valor d&#39;hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Retorna una representació textual de <code>time</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. <code>culture</code> només s'utilitza per als fluxos de treball de llegat. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, es donarà format a la data mitjançant el valor per defecte definit per <code>Culture</code>.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"tt"</code> és <code>"AM" o "PM"</code>, mentre que a <code>"ar-EG"</code>, <code>"tt"</code> és <code>"ص" o "م"</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> i <code>culture</code> també poden ser valors de text. Té el mateix comportament que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; en un valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Els resultats poden variar en funció de la referència cultural actual.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Es converteix amb un format personalitzat i la referència cultural alemanya.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Converteix amb el format de temps estàndard.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time

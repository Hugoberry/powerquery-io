---
title: Date.ToText
---

# Date.ToText


## Description

Retorna una representació textual del valor de data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Retorna una representació textual de <code>date</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. <code>culture</code> només s'utilitza per als fluxos de treball de llegat. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, es donarà format a la data mitjançant el valor per defecte definit per <code>Culture</code>.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"MMM"</code> és <code>"Jan", "Feb", "Mar"…</code>, mentre que a <code>"ru-RU"</code>, <code>"MMM"</code> és <code>"янв", "фев", "мар"…</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> i <code>culture</code> també poden ser valors de text. Té el mateix comportament que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; en un valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Els resultats poden variar en funció de la referència cultural actual.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Es converteix amb un format personalitzat i la referència cultural alemanya.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Troba l’any del calendari Hijri que correspon a l&#39;1 de gener de 2000 al calendari gregorià.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date

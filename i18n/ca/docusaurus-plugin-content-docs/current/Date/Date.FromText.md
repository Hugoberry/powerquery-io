---
title: Date.FromText
---

# Date.FromText


## Description

Crea una data a partir de formats de data locals, universals i personalitzats.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Crea un valor de <code>date</code> a partir d'una representació textual, <code>text</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, la data s'analitzarà el millor possible.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"MMM"</code> és <code>"Jan", "Feb", "Mar"…</code>, mentre que a <code>"ru-RU"</code>, <code>"MMM"</code> és <code>"янв", "фев", "мар"…</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> també pot ser un valor de text. Té el mateix comportament que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; en un valor de &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Es converteix amb un format personalitzat i la referència cultural alemanya.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Troba la data del calendari gregorià que correspon a l&#39;inici de 1400 al calendari Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date

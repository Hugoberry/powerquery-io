---
title: Date.FromText
---

# Date.FromText


Crée une date à partir de formats de date locaux, universels et personnalisés.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Crée une valeur <code>date</code> à partir d'une représentation textuelle, <code>text</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Si vous omettez ce champ ou fournissez <code>null</code>, la date sera analysée au mieux.</li>   <li><code>Culture</code> : lorsque <code>Format</code> est non nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"MMM"</code> est <code>"Jan", "Feb", "Mar", ...</code>, tandis que dans <code>"ru-RU"</code> <code>"MMM"</code> est <code>"янв", "фев", "мар", ...</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les workflows hérités, <code>options</code> peut également être une valeur de texte. Cela a le même comportement que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;2010-12-31&lt;/code&gt; en une valeur &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Recherche la date dans le calendrier grégorien qui correspond au début de 1400 dans le calendrier Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date

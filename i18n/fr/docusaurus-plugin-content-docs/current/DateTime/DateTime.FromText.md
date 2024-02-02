---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Crée un datetimezone à partir des formats datetime locaux et universels.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Crée une valeur <code>datetime</code> à partir d'une représentation textuelle, <code>text</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Si vous omettez ce champ ou fournissez <code>null</code>, la date sera analysée au mieux.</li>   <li><code>Culture</code> : lorsque <code>Format</code> est non nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"MMM"</code> est <code>"Jan", "Feb", "Mar", ...</code>, tandis que dans <code>"ru-RU"</code> <code>"MMM"</code> est <code>"янв", "фев", "мар", ...</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les workflows hérités, <code>options</code> peut également être une valeur de texte. Cela a le même comportement que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en une valeur datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Convertit &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; en une valeur datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Convertit &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en une valeur datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Convertit &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; en une valeur de type datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime

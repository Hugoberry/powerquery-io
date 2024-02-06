---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Crée un datetimezone à partir des formats datetimezone locaux, universels et personnalisés.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Crée une valeur <code>datetimezone</code> à partir d'une représentation textuelle, <code>text</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : Une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Si vous omettez ce champ ou fournissez <code>null</code>, la date sera analysée au mieux.</li>   <li><code>Culture</code> : Lorsque <code>Format</code> est non nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"MMM"</code> est <code>"Jan", "Feb", "Mar", ...</code>, tandis que dans <code>"ru-RU"</code> <code>"MMM"</code> est <code>"янв", "фев", "мар", ...</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les workflows hérités, <code>options</code> peut également être une valeur de texte. Cela a le même comportement que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; dans une valeur &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Convertir à l’aide d’ISO 8601
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone

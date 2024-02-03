---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Vrátí textovou reprezentaci hodnoty datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vrátí textovou reprezentaci <code>dateTime</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>culture</code> se používá pouze pro starší pracovní postupy.<code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí <code>Culture</code>.</li>   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"MMM"</code> hodnotu <code>"Jan", "Feb", "Mar", ...</code>, zatímco u <code>"ru-RU"</code> má <code>"MMM"</code> hodnotu <code>"янв", "фев", "мар", ...</code>. Když má <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, hodnota<code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, můžou být <code>options</code> a <code>culture</code> také textové hodnoty. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Převede řetězec &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; na hodnotu &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Převod pomocí vzoru ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime

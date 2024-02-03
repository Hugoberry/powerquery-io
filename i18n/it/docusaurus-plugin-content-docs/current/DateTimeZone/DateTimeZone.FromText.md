---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Crea un datetimezone da formati datetimezone locali, universali e personalizzati.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Crea un valore <code>datetimezone</code> da una rappresentazione testuale <code>text</code>. È possibile specificare un parametro facoltativo <code>record</code>, <code>options</code>, per specificare proprietà aggiuntive. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: valore <code>text</code> che indica il formato da usare. Per maggiori informazioni, vai a: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>null</code> verrà eseguita l'analisi della data con il massimo impegno.</li>   <li><code>Impostazioni cultura</code>: quando <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"MMM"</code> è <code>"Jan", "Feb", "Mar", ... </code>, mentre in <code>"ru-RU"</code> <code>"MMM"</code> è <code>"янв", "фев", "мар", ...</code>. Quando <code>Formato</code> è <code>null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Impostazioni cultura</code> è <code>null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare i flussi di lavoro legacy, <code>options</code> può essere anche un valore di testo. Questo comportamento è identico a quello di <code>options</code><code>= [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertire &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; in un valore &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Eseguire la conversione con ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone

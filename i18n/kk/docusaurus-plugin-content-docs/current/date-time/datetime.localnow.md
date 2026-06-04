---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Жергілікті уақыт белдеуіндегі ағымдағы күнді және уақытты қайтарады.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Жүйедегі ағымдағы күн мен уақытқа орнатылған `күн уақыты` мәнін қайтарады.  
  
Бұл функция қайтарған мән сұрауды жергілікті машинада немесе онлайн режимінде іске қосуыңызға байланысты. Мысалы, сұрауды АҚШ-тың Тынық мұхитының уақыт белдеуінде орналасқан жүйеде іске қоссаңыз, Power Query Desktop жергілікті машинаңызда белгіленген күн мен уақытты қайтарады. Дегенмен, сұрауды бұлтта іске қоссаңыз, Power Query Online UTC уақытын қайтарады, себебі ол бұлтты виртуалды машиналарда белгіленген уақытты оқиды, олардың барлығы UTC бағдарламасына орнатылған.


## Examples

### Example #1
Бұл функцияға жұмыс үстелі Power Query жергілікті машинада сілтеме жасайсыз.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Бұл функцияға Online Power Query іске қосатын бұлтта сілтеме жасаңыз.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime

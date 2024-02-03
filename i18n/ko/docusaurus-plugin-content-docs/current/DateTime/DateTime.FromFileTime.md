---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

64비트 long 형식의 숫자에서 datetime을 만듭니다.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

<code>fileTime</code> 값에서 <code>datetime</code> 값을 만든 후 이를 현지 표준 시간대로 변환합니다. filetime은 UTC(Coordinated Universal Time) 서기 1601년 1월 1일 자정 12시(C.E.) 이후 경과된 시간을 100나노초 간격의 수로 나타내는 Windows 파일 시간 값입니다.


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt;를 datetime 값으로 변환합니다.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime

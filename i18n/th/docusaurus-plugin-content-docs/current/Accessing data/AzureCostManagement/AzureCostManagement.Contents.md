---
title: AzureCostManagement.Contents
---

# AzureCostManagement.Contents



## Syntax

```powerquery
AzureCostManagement.Contents(
    scope as text,
    scopeValue as text,
    numberOfMonths as number,
    optional parameters as record
) as table
```



## Examples

### Example #1 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับสรุปข้อมูลระหว่าง 2017-5-1 ถึง 2017-6-15
```powerquery
ให้    
          enrollmentNumber = "100"
          optionalParameters = [ numberOfMonth = 1 ]
          ผลลัพธ์ = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)   
      ใน
          ผลลัพธ์
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลสรุประหว่าง 2017-5-1 ถึง 2017-6-15
```


### Example #2 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับข้อมูลสรุปสำหรับเดือนเมษายน 2017
```powerquery
ให้    
          enrollmentNumber = "100"
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ]
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน
          ผลลัพธ์
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2017-4-1 และ 2017-4-30
```


### Example #3 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับข้อมูลสรุปจากเดือนเมษายน 2017 จนถึงปัจจุบัน
```powerquery
ให้    
          enrollmentNumber = "100"
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ]
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน
          ผลลัพธ์
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2017-4-1 ถึง 2017-6-15
```




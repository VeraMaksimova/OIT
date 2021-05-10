<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<style type="text/css">
*{
    background-color:#FFA07A;
    color:white;
    text-align:center;
    text-transform:uppercase;
}
table{
    margin-left: auto;
    margin-right:auto;
     
}
th{
    text-transform:uppercase;
    border:2px solid #FF1493;
    font-weight:300;
    padding:20px 60px;

}
td{
    
    text-transform:uppercase;
    border:2px solid #FF1493;
    padding:20px 60px;
    text-align:center;
}
</style>
</head>
<body>
<table style="border-collapse: collapse" >
<tr>
<th>University</th>
<th>Ball</th>
<th>Plan of students</th>
<th>City</th>
</tr>
<xsl:for-each select="information">
<xsl:for-each select="univer">
<tr>
<td><xsl:value-of select="name_of_un"/></td>
<td><xsl:value-of select="ball"/></td>
<td><xsl:value-of select="plan"/></td>
<td><xsl:value-of select="city"/></td>
</tr>
</xsl:for-each>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
Kystlinje-simplify


1. Last ned N500 Kartdata, UTM33, hele landet, FGDB fra data.kartverket.no
2. Åpne med Qgis 2.10 (har støtte for FGDB)
3. Åpne filgeodatabase
4. Velg laget Arealdekke
5. Velg alle med OBJTYPE='Havflate'
6. Lagre som eget lag
7. Kjør dissolve (vector meny)
8. Kjør "polygons to lines" (fra processing toolbar)
9. Kjør lines to polygons (fra processing toolbar)
10. Klipp ut "hovedpolygon" til eget layer
11. Lagre øyene som geojson
12. Kjør "polygons to lines" på hovedpolygonet
13. Klipp linja, slett delen som ikke er kystlinje
14. Lagre linja som geojson (skip attribute creation)
15. klipp vekk selve kysten
16. lagre som geojson (skip attribute creation)

Resultat av steg 1-16 lagret i data/

17. kjør simplyfy.js (node simplify.js)
18. Lagre geojson-fil på webserver
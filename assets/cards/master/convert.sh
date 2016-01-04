#! /bin/sh

for file in *.svg
do
	filename=`echo "${file}" | sed s/.svg//`
	/usr/bin/inkscape -z -f "${file}" -h 100 -e "../$filename.png"
done

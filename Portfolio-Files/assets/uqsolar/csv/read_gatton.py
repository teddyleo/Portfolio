data = "["
with open('gatton_load_pv.csv', 'r') as f:
    f.readline()
    g = f.readline()
    datetime = g.split(",")[0]
    date = datetime.split(' ')[0].split("-")
    date_line = "Date.UTC(" + date[0] + ", " + date[1] + ", " + date[2] + ", "
    time = datetime.split(' ')[1].split("+")[0].split(":")
    date_line += time[0] + ", " + time[1] + ")"
    data += "[" + date_line + ", " + g.split(",")[2].split('\n')[0] + "]"
    for line in f:
        line_data = line.split(',')
        datetime = line_data[0]
        date = datetime.split(' ')[0].split("-")
        date_line = "Date.UTC(" + date[0] + ", " + date[1] + ", " + date[2] + ", "
        time = datetime.split(' ')[1].split("+")[0].split(":")
        date_line += time[0] + ", " + time[1] + ")"
        data += ",[" + date_line + ", " + line_data[2].split('\n')[0] + "]"
data += "]"
f.closed
h = open('gatton_battery.txt', 'w')
h.write(data)
h.closed

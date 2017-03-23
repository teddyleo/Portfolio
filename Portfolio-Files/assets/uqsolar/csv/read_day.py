data = "["
with open('max_energy.csv', 'r') as f:
    f.readline()
    g = f.readline()
    datetime = g.split(",")[0]
    date = datetime.split(' ')[0].split("/")
    date_line = "Date.UTC(" + "5, 24, 2016" + ", "
    time = datetime.split(' ')[1].split(":")
    date_line += time[0] + ", " + time[1] + ")"
    data += "[" + date_line + ", " + g.split(",")[6].split('\n')[0] + "]"
    for line in f:
        line_data = line.split(',')
        datetime = line_data[0]
        date = datetime.split(' ')[0].split("/")
        date_line = "Date.UTC(" + "5, 24, 2016" + ", "
        time = datetime.split(' ')[1].split(":")
        date_line += time[0] + ", " + time[1] + ")"
        data += ",[" + date_line + ", " + line_data[6].split('\n')[0] + "]"
data += "]"
f.closed
h = open('max_energy.txt', 'w')
h.write(data)
h.closed

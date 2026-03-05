import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Komplex Cafe Website',
      theme: ThemeData(
        
        colorScheme: .fromSeed(seedColor: Colors.brown),
      ),
      home: const HomePage(title: 'Komplex Cafe Homepage'),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
              // banner with image
              Container(
                child: Column(
                  children: [
                    Text(
                      "Komplex Cafe"
                    ),
                    Text(
                      "...Where every cup tells a story."
                    )
                  ],
                )
              ),

              // aboout info + browse menu button
              Container(
                padding: EdgeInsets.all(45.0),
                child: Column(
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: 
                          Text(
                            "Located in the heart of Sampaloc, Manila near UST, we blend studying and coffee️ to inspire your creativity. Join us for a unique experience that goes beyond the ordinary.",
                            textAlign: TextAlign.justify,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(height: 16.0),

                    ElevatedButton(
                      onPressed: null,
                      child: 
                        Text("Browse Menu", style: TextStyle(fontWeight: FontWeight.bold),),
                    )
                  ],
                )
              ),
                
              // img with text  
              Container(
                padding: EdgeInsets.all(45.0),
                child: Column(
                  children: [
                    Row(
                      children: [

                        //img go here

                        Expanded(
                          child: 
                            Text(
                              "Here at Komplex Cafe, you can focus on your work while enjoying freshly brewed coffee. We also offer fruit tea, pasta, and pastries.",
                              textAlign: TextAlign.right,
                            ),
                        )

                      ],
                    )
                  ],
                )
              ),

              // list of opening hours
              Container(
                child: Column(
                  children: [
                    Text(
                      "We're open on: ",
                      style: TextStyle(fontWeight: FontWeight.bold)
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Column(
                          children: [
                            Text("Weekdays:",style: TextStyle(fontWeight: FontWeight.bold),),
                            Text("Saturdays:",style: TextStyle(fontWeight: FontWeight.bold)),
                            Text("Sundays:",style: TextStyle(fontWeight: FontWeight.bold)),
                          ]
                        ),
                        Column(
                          children: [
                            Text("10:00 AM - 2:00 AM"),
                            Text("10:00 AM - 12:00 AM"),
                            Text("12:00 PM - 10:00 PM"),
                          ]
                        )
                      ],
                    )
                  ],
                )
              ),

              // img with text  
              Container(
                padding: EdgeInsets.all(45.0),
                child: Row(
                  children: [
                    Column(
                      children: [
                        Text(
                          "Interested in booking Komplex Cafe for an event? Come send us a message!"
                        ),

                        ElevatedButton(
                          onPressed: null,
                          child: 
                            Text("Contact Us", style: TextStyle(fontWeight: FontWeight.bold),),
                        ),
                      ],
                    ),

                    Text(
                      "image go here"
                    )
                  ],
                )
              ),

              // img with text  
              Container(
                padding: EdgeInsets.all(45.0),
                child: Column(
                  children: [
                    Row(
                      children: [
                        Text(
                          "Visit us at:",
                          textAlign: TextAlign.center,
                        ),
                        Row(
                          children: [
                            //icon go here
                            Text(
                              "1045 Padre Noval St, Sampaloc, Manila, 1008 Metro Manila",
                              style: TextStyle(fontWeight: FontWeight.bold)
                            )
                          ],
                        )
                      ],
                    )
                  ],
                )
              ),

          ],
        ),
      ),

    );
  }
}

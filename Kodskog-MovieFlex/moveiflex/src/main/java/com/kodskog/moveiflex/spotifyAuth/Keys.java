package com.kodskog.moveiflex.spotifyAuth;

public enum Keys {

    ClientId("a6efc533d8444fa49fbaf5e02f0541f2"),
    ClientSc("22078ac505d94cef9743eb7bc09354c5")
    ;

    private final String value;

    Keys(String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }
}

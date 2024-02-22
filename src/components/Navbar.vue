<template>     
      <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="./">
                                TimeReport
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">                  
                            <div class="navbar-end">
                                <div class="tabs is-right">
                                    <ul>
                                        <li><RouterLink to="/">Dashboard</RouterLink></li>
                                        <li><RouterLink to="/contractor">Kontahenci</RouterLink></li>
                                        <li><RouterLink to="/contractor">Raportuj</RouterLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
           
</template>

<script setup lang="ts">
</script>


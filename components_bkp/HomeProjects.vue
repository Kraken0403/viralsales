<template>
    <div class="home-projects section dark-bg">
        <div class="container-narrow">
            <div class="home-projects-title">
                <h2>Featured Projects</h2>
            </div>

            <div class="home-projects-main">
                <div class="hp-narrow hp-row">
                    <div class="hp-col-50">
                        <img :src= homeData.data.slices[2].primary.project_one_image.url  alt="">
                    </div>
                    <div class="hp-col-50 text-left">
                        <div class="hp-content">
                            <div class="hp-title">
                                <h2>{{ homeData.data.slices[2].primary.project_one_title }}</h2>
                            </div>
                            <div class="hp-desc">
                                <p>{{ homeData.data.slices[2].primary.project_one_content }}</p>
                            </div>
                            <div class="hp-logos"></div>
                        </div>
                        
                    </div>
                </div>

                <div class="hp-wide hp-row-100">
                    <div class="hp-col-100">
                        <img :src= homeData.data.slices[2].primary.project_two_image.url alt="">
                    </div>

                    <div class="hp-col-100">
                        <div class="hp-content">
                            <div class="hp-title">
                                <h2>{{ homeData.data.slices[2].primary.project_two_title }}</h2>
                            </div>
                            <div class="hp-desc">
                                <p>{{ homeData.data.slices[2].primary.project_two_content }}</p>

                            </div>
                            <div class="hp-logos"></div>
                        </div>
                        
                    </div>
                </div>

                <div class="hp-narrow hp-row">
                    <div class="hp-col-50 text-right">
                        <div class="hp-content">
                            <div class="hp-title">
                                <h2>{{ homeData.data.slices[2].primary.project_three_title }}</h2>
                            </div>
                            <div class="hp-desc">
                                <p>{{ homeData.data.slices[2].primary.project_three_content }}</p>

                            </div>
                            <div class="hp-logos"></div>
                        </div>  
                        
                    </div>
                    <div class="hp-col-50">
                        <img :src= homeData.data.slices[2].primary.project_three_image.url alt="">
                    </div>
                </div>

                <div class="hp-wide hp-row">
                    <div class="hp-col-60">
                        <img :src= homeData.data.slices[2].primary.project_four_image.url alt="">
                    </div>

                    <div class="hp-col-40">
                        <div class="hp-content">
                            <div class="hp-title">
                                <h2>{{ homeData.data.slices[2].primary.project_four_title }}</h2>
                            </div>
                            <div class="hp-desc">
                                <p>{{ homeData.data.slices[2].primary.project_four_content }}</p>

                            </div>
                            <div class="hp-logos"></div>
                        </div>
                        
                    </div>
                </div>

                <div class="home-projects-cta">
                    <div class="hp-cta-content">
                        <h3>
                            Lovely right? There is more where that came from
                        </h3>
                    </div>
                        <Button buttonText="All Projects"/>
                </div>

            </div>
        
        </div>
    </div>
</template>

<script setup>
    import Button from './Button.vue';

    import { inject } from 'vue';

    const homePageData = inject('homePageData');
    const homeData = homePageData._rawValue;
    
</script>

<style src="./HomeProjects.scss" scoped>
</style>
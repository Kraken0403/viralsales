<template>
  <div v-if="page">
    <div class="project-card-wrapper section">
      <div class="container-narrow">
        <div
          v-for="(slice, sliceIndex) in dataMain.data.slices"
          :key="sliceIndex"
          class="project-card"
        >
          <div
            v-for="(item, itemIndex) in slice.primary.project_info"
            :key="itemIndex"
            class="project-info"
          >
            <div class="project-card-image">
              <img
                v-if="item.project_image?.url"
                :src="item.project_image.url"
                :alt="item.project_image.alt || 'Default'"
              />
            </div>
            <div class="project-card-content">
              <h2 v-html="item.project_title"></h2>
              <p>{{ item.project_description }}</p>
              <div class="project-tags">
                <div v-if="item.project_tags">
                  <div class="tags-container">
                    <span
                      v-for="(tag, index) in item.project_tags
                        .split(',')
                        .map((tag: string) => tag.trim())"
                      :key="index"
                      class="project-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>


<script setup >
  import { useAsyncData } from "#app";
  import { usePrismic } from "@prismicio/vue";

  const prismic = usePrismic();
  const { data: page } = await useAsyncData("projects", () =>
    prismic.client.getSingle("projects")
  );

  // Log the fetched data to the console
  const dataMain = page._rawValue;
  console.log('Fetched page data:', dataMain);
</script>

<style src="./ProjectCard.scss" scoped></style>

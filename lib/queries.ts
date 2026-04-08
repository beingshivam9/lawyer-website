import { client } from './sanity'

export async function getLawyer() {
  return await client.fetch(`*[_type == "lawyer"][0]`)
}

export async function getPracticeAreas() {
  return await client.fetch(`*[_type == "practiceArea"]`)
}

export async function getCases() {
  return await client.fetch(`*[_type == "caseResult"]`)
}

export async function getTestimonials() {
  return await client.fetch(`*[_type == "testimonial"]`)
}
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  defaultCategory: Category = {
    categoryId: 0,
    categoryName: '',
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  setCurrentCategoryNull() {
    this.currentCategory = this.defaultCategory;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active btn';
    } else {
      return 'list-group-item btn';
    }
  }

  getAllCategoryClass() {
    if (this.currentCategory == this.defaultCategory || !this.currentCategory) {
      return 'list-group-item active btn';
    } else {
      return 'list-group-item btn';
    }
  }
}

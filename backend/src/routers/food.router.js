import { Router } from "express";
import { sample__foods, sample__tags } from "../data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample__foods);
});

router.get('/tags', (req, res) => {
    res.send(sample__tags);
});

router.get('/search/:searchTerm', (req, res) => {
    const {searchTerm} = req.params;
    const foods = sample__foods.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

router.get('/tag/:tag', (req, res) => {
    const {tag} = req.params;
    const foods = sample__foods.filter(item => item.tags?.includes(tag));
    res.send(foods);
});

router.get('/:foodId', (req, res) => {
    const {foodId} = req.params;
    const food = sample__foods.find(item => item.id === foodId);
    res.send(food);
});

export default router;